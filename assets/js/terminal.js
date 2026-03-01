/* ============================================
   Terminal Portfolio — terminal.js
   Typing animation + fade-in output
   ============================================ */

(function () {
  'use strict';

  var TYPING_SPEED = 40; // ms per character

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Type out a command's text character by character,
   * then fade in the section output.
   */
  function animateSection(section) {
    var commandEl = section.querySelector('.command-text');
    var outputEl = section.querySelector('.section-output');
    var fullText = commandEl.getAttribute('data-text');

    if (reducedMotion) {
      commandEl.textContent = fullText;
      if (outputEl) outputEl.classList.add('visible');
      return;
    }

    commandEl.textContent = '';
    var i = 0;

    function typeChar() {
      if (i < fullText.length) {
        commandEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeChar, TYPING_SPEED);
      } else if (outputEl) {
        outputEl.classList.add('visible');
      }
    }

    typeChar();
  }

  /**
   * Set up IntersectionObserver to trigger animations
   * when sections scroll into view.
   */
  function init() {
    var sections = document.querySelectorAll('.terminal-section');

    if (reducedMotion) {
      sections.forEach(function (section) {
        animateSection(section);
      });
      return;
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
              entry.target.dataset.animated = 'true';
              animateSection(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    } else {
      // Fallback: animate all immediately
      sections.forEach(function (section) {
        animateSection(section);
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
