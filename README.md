# avw-portfolio

A terminal-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript. The site emulates a Unix terminal interface, presenting professional experience and technical skills through familiar CLI commands.

## Tech Stack

- **HTML5** - Semantic markup with ARIA labels for accessibility
- **CSS3** - Custom properties, responsive breakpoints, Tokyo Night color scheme
- **Vanilla JavaScript** - Typing animations, scroll-triggered fade-ins, blinking cursor
- **JetBrains Mono** - Monospace font via Google Fonts

No frameworks, bundlers, or build tools required.

## Features

- Terminal-style UI with command prompts and section outputs
- Typing animation on command lines (40ms per character)
- Scroll-triggered section reveals using `IntersectionObserver`
- Responsive design with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` for accessibility

## Site Sections

| Command | Section |
|---|---|
| `whoami` | About me, bio, education |
| `cat experience.log` | Work experience |
| `cat interests.conf` | Technical skills and interests |
| `ls ~/projects` | Project showcase |
| `cat contact.txt` | GitHub, LinkedIn, email |

## Project Structure

```
avw-portfolio/
├── index.html              # Single-page portfolio
├── assets/
│   ├── css/
│   │   └── terminal.css    # All styles (layout, theme, animations)
│   ├── images/
│   │   └── avw-headshot.jpg
│   └── js/
│       └── terminal.js     # Typing effect and scroll animations
├── .nojekyll               # Bypasses Jekyll on GitHub Pages
└── README.md
```

## Local Development

Since this is a static site with no build step, you can run it locally by either opening `index.html` directly in a browser or starting a simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server .
```

Then visit `http://localhost:8000` in your browser.

## Deployment

The site is deployed via **GitHub Pages**, serving static files directly from the `main` branch. The `.nojekyll` file in the repository root tells GitHub Pages to skip Jekyll processing and serve the files as-is.

To deploy changes, push commits to `main` and GitHub Pages will automatically pick them up.
