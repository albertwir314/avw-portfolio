---
layout: default
title: Home
description: Professional software developer specializing in full-stack development and modern web technologies
---

<div class="hero">
  <h1>Albert Wiryawan</h1>
  <div class="hero-subtitle">
    Professional Software Developer specializing in full-stack development, modern web technologies, and scalable system architecture.
  </div>
  <div class="hero-cta">
    <a href="/avw-portfolio/about" class="btn btn-primary">Learn More About Me</a>
    <a href="/avw-portfolio/projects" class="btn btn-outline">View My Work</a>
  </div>
</div>

## Recent Projects

<div class="projects-grid">
  {% for project in site.projects limit: 3 %}
  <div class="project-card">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p class="project-description">{{ project.description }}</p>
    {% if project.tech_stack %}
    <div class="tech-stack">
      {% for tech in project.tech_stack limit: 3 %}
        <span class="tech-tag">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    <div class="project-links">
      <a href="{{ project.url | relative_url }}" class="btn btn-outline">Learn More</a>
    </div>
  </div>
  {% endfor %}
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="/avw-portfolio/projects" class="btn btn-primary">View All Projects</a>
</div>

## Technical Expertise

<div class="skills-grid">
  <div class="skill-category">
    <h4>Frontend Development</h4>
    <ul>
      <li>React, Vue.js, Angular</li>
      <li>TypeScript, JavaScript (ES6+)</li>
      <li>HTML5, CSS3, SASS/SCSS</li>
      <li>Responsive Design</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>Backend Development</h4>
    <ul>
      <li>Node.js, Python, Java</li>
      <li>RESTful APIs, GraphQL</li>
      <li>Database Design (SQL/NoSQL)</li>
      <li>Microservices Architecture</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>DevOps & Tools</h4>
    <ul>
      <li>Docker, Kubernetes</li>
      <li>AWS, Google Cloud</li>
      <li>CI/CD Pipelines</li>
      <li>Git, Agile Methodologies</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>Development Practices</h4>
    <ul>
      <li>Test-Driven Development</li>
      <li>Clean Architecture</li>
      <li>Code Review & Pair Programming</li>
      <li>Performance Optimization</li>
    </ul>
  </div>
</div>

## What I Bring to Your Team

- **Problem-Solving Mindset**: I approach challenges with analytical thinking and creative solutions
- **Quality Focus**: Committed to writing clean, maintainable, and well-tested code
- **Continuous Learning**: Stay current with emerging technologies and best practices  
- **Collaboration**: Experience working in agile teams and mentoring junior developers
- **User-Centric**: Always consider the end-user experience in technical decisions

---

<div style="text-align: center; margin: 3rem 0;">
  <h3>Ready to work together?</h3>
  <p>Let's discuss how I can contribute to your next project.</p>
  <a href="/avw-portfolio/contact" class="btn btn-primary">Get In Touch</a>
</div>