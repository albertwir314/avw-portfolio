---
layout: default
title: Home
description: Professional software developer specializing in full-stack development and modern web technologies
---

<div class="hero">
  <h1>Albert Wiryawan</h1>
  <div class="hero-subtitle">
    Data Engineer specializing in scalable data systems, streaming analytics, and cloud-native data warehousing solutions.
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
    <h4>Data Engineering</h4>
    <ul>
      <li>Apache Iceberg, Trino</li>
      <li>Apache Kafka, Protobuf</li>
      <li>Streaming Data Processing</li>
      <li>Data Warehouse Architecture</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>Programming & Analytics</h4>
    <ul>
      <li>Python, Java, SQL</li>
      <li>R, C++, Matlab</li>
      <li>PyData Stack</li>
      <li>Statistical Learning</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>Cloud & Infrastructure</h4>
    <ul>
      <li>GCP, AWS, Azure</li>
      <li>Snowflake, Databricks</li>
      <li>Docker, Kubernetes</li>
      <li>Terraform, Jenkins</li>
    </ul>
  </div>
  
  <div class="skill-category">
    <h4>Consulting & Analysis</h4>
    <ul>
      <li>Data Mining & Analytics</li>
      <li>Database Systems Design</li>
      <li>Client Engagement</li>
      <li>Cross-functional Collaboration</li>
    </ul>
  </div>
</div>
---

<div style="text-align: center; margin: 3rem 0;">
  <h3>Ready to work together?</h3>
  <p>Let's discuss how I can contribute to your next project.</p>
  <a href="/avw-portfolio/contact" class="btn btn-primary">Get In Touch</a>
</div>