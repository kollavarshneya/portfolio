import React from 'react';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const myProjects = [
    {
      id: 1,
      title: "OPSD power Desk: Day-Ahead Load Forecasting",
      description: "Deployed a multi-country SARIMA forecasting system achieving a MASE < 0.3 (70% better than baselines) by integrating STL decomposition, hybrid anomaly detection, and an automated OPSD pipeline with drift detection to maintain reliability.",
      techStack: ["SARIMA", "Logistic Regression", "STL Decomposition"],
      githubLink: "https://github.com/your-username/dsa-visualizer"
    },
    {
      id: 2,
      title: "Code Analytics Dashboard",
      description: "Built a high-performance full-stack platform featuring a Python microservice that automates static analysis to reduce review time while maintaining quick response times and secure JWT authentication.",
      techStack: ["React.js", "Next.js", "Pylint","Flake8"],
      githubLink: "https://github.com/your-username/easy-ride"
    },
    {
      id: 3,
      title: "Employee Attrition Prediction",
      description: "Built a dual-model XGBoost pipeline with 92% accuracy to predict employee turnover and financial impact, leveraging SMOTE to identify key attrition drivers and project a significant reduction in hiring costs.",
      techStack: ["Scikit-learn","XGBoost", "Pandas", "NumPy"],
      githubLink: "https://github.com/your-username/uniapply"
    }
  ];

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        {/* --- ABOUT SECTION --- */}
        <section id="about" className="section hero-section">
          <div className="hero-content">
            <h2 className="greeting">Hi, I'm</h2>
            <h1 className="name">Varshneya Kolla</h1>
            <p className="title">Software Engineering Student & Developer</p>
            <br/>
            <p className="about-text">
              I am a Computer Science student at Mahindra University with a deep-seated passion for building scalable, data-driven applications. My work sits at the intersection of Full-Stack Development and Machine Learning, where I focus on transforming complex data into actionable insights and intuitive user experiences. 
            </p>
          </div>
          <div className="image-wrapper">
            <img src="./Profile.jpg" alt="Profile" className="profile-pic" />
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="section">
          <h2 className="section-title">Tech Skills</h2>
          <div className="card skills-container">
            
            <div className="skills-category">
              <h3 className="category-title">Languages</h3>
              <div className="tags">
                <span className="tag">C</span>
                <span className="tag">C++</span>
                <span className="tag">Python</span>
                <span className="tag">Java</span>
                <span className="tag">JavaScript</span>
                <span className="tag">SQL</span>
                <span className="tag">MATLAB</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Machine Learning</h3>
              <div className="tags">
                <span className="tag">Frame Works</span>
                <span className="tag">Scikit-learn</span>
                <span className="tag">Pytorch</span>
                <span className="tag">Pandas</span>
                <span className="tag">NumPy</span>
                <span className="tag">Matplotlib & Seaborn</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Frontend</h3>
              <div className="tags">
                <span className="tag">React.js</span>
                <span className="tag">Next.js</span>
                <span className="tag">HTML</span>\
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Backend & Auth</h3>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">JWT Authentication</span>
                <span className="tag">Next Auth</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Tools & wireframes</h3>
              <div className="tags">
                <span className="tag">Git</span>
                <span className="tag">Figma</span>
                <span className="tag">canvas</span>
                <span className="tag">MATLAB</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {myProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                  View Source [→]
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* --- ACHIEVEMENTS SECTION --- */}
        <section id="achievements" className="section">
          <h2 className="section-title">Achievements</h2>
          <div className="content-grid">
            <div className="card">
              <h3><span className="icon">_</span> Google Big Code Challenge</h3>
              <p>Participated in the March 2026 challenge, demonstrating advanced algorithmic problem-solving and competitive programming skills under strict time constraints.</p>
            </div>
            <div className="card">
              <h3><span className="icon">_</span> Silicon Lab Edge Intelligence Challange</h3>
              <p>Shortlisted for Round 2 for designing a "Smart Exit System."
    Leveraged localized edge computing for real-time facility safety and automation.</p>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="card details-card">
            <ul>
              <li><span className="label">Location:</span> Hyderabad, Telangana, India</li>
              <li><span className="label">Phone:</span> +91-9100825756</li>
              <li><span className="label">Personal Email:</span> varshneya199189@gmail.com</li>
              <li><span className="label">College Email:</span> studentID@mahindrauniversity.edu.in</li>
              <li>
                <span className="label">GitHub:</span> 
                <a href="https://github.com/kollavarshneya" target="_blank" rel="noopener noreferrer" className="inline-link">
                  github.com/kollavarshneya
                </a>
              </li>
              <li>
                <span className="label">LinkedIn:</span> 
                {/* Replace the link below with your actual LinkedIn URL */}
                <a href="https://www.linkedin.com/in/kvarshneya17/" target="_blank" rel="noopener noreferrer" className="inline-link">
                  linkedin.com/in/Varshneya kolla
                </a>
              </li>
            </ul>
            <br/>
            <a href="mailto:varshneya199189@gmail.com" className="action-btn">
              Initiate Handshake [→]
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;