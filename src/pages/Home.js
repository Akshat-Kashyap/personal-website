// Home.js - COMPLETELY REDESIGNED
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Data Scientist",
    "AI Engineer", 
    "Machine Learning Specialist",
    "Data Analyst"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1PpNdvNEyKyJxsK7ImRXac_juOBtvth32/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'https://drive.google.com/file/d/1PpNdvNEyKyJxsK7ImRXac_juOBtvth32/view?usp=sharing';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* COMPLETELY NEW HERO DESIGN */}
      <section className="new-hero">
        <div className="hero-bg-elements">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="code-lines">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="code-line" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-main-content">
              {/* Profile Badge */}
              <div className="profile-badge">
                <div className="badge-icon">
                  <i className="fas fa-code"></i>
                </div>
                <span>Available for Opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="main-heading">
                <span className="gradient-text">Akshat Kashyap</span>
              </h1>
              
              {/* Animated Role */}
              <div className="role-container">
                <div className="role-badge">
                  <i className="fas fa-star"></i>
                  <span className="role-text">{roles[currentRole]}</span>
                </div>
              </div>

              {/* Description */}
              <p className="hero-description">
                Transforming complex data into <span className="highlight">intelligent solutions</span> 
                through cutting-edge AI/ML, Data Engineering, and Business Intelligence. 
                Passionate about building innovative data-driven applications.
              </p>

              {/* Stats Row */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Years Exp</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-actions">
                <Link to="/projects" className="cta-btn primary">
                  <i className="fas fa-rocket"></i>
                  <span>View My Work</span>
                </Link>
                <button onClick={downloadResume} className="cta-btn secondary">
                  <i className="fas fa-download"></i>
                  <span>Download CV</span>
                </button>
                <Link to="/contact" className="cta-btn outline">
                  <i className="fas fa-paper-plane"></i>
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>

            {/* Tech Stack Visual */}
            <div className="tech-visual">
              <div className="tech-orb">
                <div className="orb-core">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="orb-ring ring-1">
                  <div className="tech-item">Python</div>
                  <div className="tech-item">AI/ML</div>
                  <div className="tech-item">SQL</div>
                </div>
                <div className="orb-ring ring-2">
                  <div className="tech-item">TensorFlow</div>
                  <div className="tech-item">Power BI</div>
                  <div className="tech-item">GCP</div>
                </div>
                <div className="orb-ring ring-3">
                  <div className="tech-item">NLP</div>
                  <div className="tech-item">Data Viz</div>
                  <div className="tech-item">ETL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned */}
      <section className="skills-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Core Competencies</h2>
            <p>Specialized skills in data science and artificial intelligence</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>AI & Machine Learning</h3>
              </div>
              <div className="skill-items">
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">Natural Language Processing</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">Predictive Modeling</span>
                <span className="skill-tag">Neural Networks</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Data Engineering</h3>
              </div>
              <div className="skill-items">
                <span className="skill-tag">ETL Pipelines</span>
                <span className="skill-tag">SQL & NoSQL</span>
                <span className="skill-tag">Data Warehousing</span>
                <span className="skill-tag">Big Data</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Data Analytics</h3>
              </div>
              <div className="skill-items">
                <span className="skill-tag">Power BI</span>
                <span className="skill-tag">Tableau</span>
                <span className="skill-tag">Statistical Analysis</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Business Intelligence</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3>Cloud & Tools</h3>
              </div>
              <div className="skill-items">
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">TensorFlow/PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
