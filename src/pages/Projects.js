import React from 'react';

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "",
      description: "An interactive tool designed to bridge the gap between algorithmic logic and visual representation for complex data structures.",
      techStack: ["React", "JavaScript", "Algorithms"],
      githubLink: "https://github.com/your-username/dsa-visualizer"
    },
    {
      id: 2,
      title: "Easy Ride - Ride Sharing App",
      description: "A conceptual ride-sharing platform focused on zero-cancellation guarantees and competitive market analysis.",
      techStack: ["UI/UX", "System Design"],
      githubLink: "https://github.com/your-username/easy-ride"
    },
    {
      id: 3,
      title: "UniApply Portal",
      description: "A microservices-based university application portal handling secure admissions and payment processing.",
      techStack: ["MERN Stack", "Microservices"],
      githubLink: "https://github.com/your-username/uniapply"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Featured Projects</h1>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;