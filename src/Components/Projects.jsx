
import React from 'react';
import '../App.scss';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React, showcasing projects and skills with a modern design.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-fledged e-commerce web application with user authentication, product search, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A task management application that helps users organize tasks, set priorities, and collaborate in real-time.',
    technologies: ['Angular', 'Firebase', 'TypeScript'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects"id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

