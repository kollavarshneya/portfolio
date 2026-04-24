import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">Varshneya Kolla</h1>
          <p className="title">Software Engineering Student & Developer</p>
        </div>
        {/* Replace with your actual image */}
        <div className="image-wrapper">
          <img src="https://via.placeholder.com/200" alt="Profile" className="profile-pic" />
        </div>
      </header>

      <div className="content-grid">
        <section className="card about-card">
          <h3>About Me</h3>
          <p>I am a passionate software engineering student focused on building scalable web applications. I enjoy tackling complex algorithmic problems and turning ideas into clean, efficient code.</p>
        </section>

        <section className="card details-card">
          <h3>Personal Details</h3>
          <ul>
            <li><span className="label">Location:</span> Hyderabad, India</li>
            <li><span className="label">Phone:</span> +91 XXXXX XXXXX</li>
            <li><span className="label">Personal:</span> your.email@gmail.com</li>
            <li><span className="label">College:</span> studentID@mahindrauniversity.edu.in</li>
          </ul>
        </section>

        <section className="card skills-card">
          <h3>Technical Skills</h3>
          <div className="tags">
            <span className="tag">MERN Stack</span>
            <span className="tag">C++</span>
            <span className="tag">Data Structures & Algorithms</span>
            <span className="tag">UI/UX Design</span>
            <span className="tag">React</span>
          </div>
        </section>

        <section className="card research-card">
          <h3>Research Interests</h3>
          <p>Human-Computer Interaction (HCI), Computer Networking Protocols, and Deep Learning Architectures.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;