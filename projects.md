---
layout: page
title: Projects
description: A showcase of Albert Wiryawan's software development projects and technical achievements
permalink: /projects/
---

# My Projects

Here's a collection of projects that demonstrate my technical skills, problem-solving abilities, and commitment to quality software development. Each project showcases different aspects of my expertise, from full-stack web applications to system architecture and developer tools.

<div class="projects-grid">
  {% for project in site.projects %}
  <div class="project-card">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p class="project-description">{{ project.description }}</p>
    
    {% if project.tech_stack %}
    <div class="tech-stack">
      <strong>Technologies:</strong>
      {% for tech in project.tech_stack %}
        <span class="tech-tag">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="project-links">
      <a href="{{ project.url | relative_url }}" class="btn btn-outline">Learn More</a>
      {% if project.github_url %}
        <a href="{{ project.github_url }}" class="btn btn-secondary" target="_blank">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          View Code
        </a>
      {% endif %}
      {% if project.demo_url %}
        <a href="{{ project.demo_url }}" class="btn btn-primary" target="_blank">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path d="M1.5 1A1.5 1.5 0 000 2.5v11A1.5 1.5 0 001.5 15h13a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0014.5 1h-13zm13 2.5v11h-13v-11h13z"></path>
            <path d="M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5A.5.5 0 013 6z"></path>
          </svg>
          Live Demo
        </a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
<div style="text-align: center; padding: 3rem 0; background: #f8f9fa; border-radius: 8px; margin: 2rem 0;">
  <h3>Projects Coming Soon</h3>
  <p>I'm currently updating my portfolio with detailed project showcases. Check back soon to see examples of my work!</p>
  <p>In the meantime, feel free to:</p>
  <div style="margin-top: 1rem;">
    <a href="/avw-portfolio/contact" class="btn btn-primary">Get In Touch</a>
    <a href="/avw-portfolio/about" class="btn btn-outline">Learn More About Me</a>
  </div>
</div>
{% endif %}

## Project Categories

### Full-Stack Web Applications
Complete web applications built with modern frameworks and best practices, featuring:
- Responsive user interfaces
- RESTful APIs and database integration
- User authentication and authorization
- Performance optimization
- Comprehensive testing

### Backend Services & APIs
Scalable server-side applications and microservices including:
- RESTful and GraphQL APIs
- Database design and optimization  
- Authentication and security implementation
- API documentation and testing
- Cloud deployment and DevOps

### Frontend Applications
Modern, responsive web applications featuring:
- Component-based architecture
- State management
- Progressive Web App capabilities
- Accessibility and performance optimization
- Cross-browser compatibility

### Developer Tools & Utilities
Tools and utilities that improve developer productivity:
- CLI applications and build tools
- Code generators and automation scripts
- Development environment setup
- Documentation and testing tools

---

## Development Process

Each project in my portfolio demonstrates my commitment to professional development practices:

### Planning & Design
- **Requirements Analysis**: Thorough understanding of project goals and constraints
- **Technical Architecture**: Careful consideration of technology choices and system design
- **User Experience**: Design thinking applied to create intuitive, accessible interfaces

### Implementation
- **Clean Code**: Following established coding standards and best practices
- **Version Control**: Meaningful commit history and branching strategies
- **Testing**: Unit tests, integration tests, and end-to-end testing where applicable
- **Documentation**: Clear README files, API documentation, and code comments

### Deployment & Maintenance
- **CI/CD Pipelines**: Automated testing, building, and deployment
- **Monitoring**: Performance tracking and error reporting
- **Security**: Following security best practices and keeping dependencies updated
- **Scalability**: Designing for growth and changing requirements

---

<div style="text-align: center; margin: 3rem 0;">
  <h3>Interested in working together?</h3>
  <p>These projects represent just a portion of my experience and capabilities. I'd love to discuss how I can contribute to your team or project.</p>
  <a href="/avw-portfolio/contact" class="btn btn-primary">Let's Talk</a>
</div>