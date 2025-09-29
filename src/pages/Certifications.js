// Updated Certifications.js - Fixed IEEE Button
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Prompt Engineering",
      issuer: "Futurense Technologies",
      date: "Apr 2024 – May 2024",
      icon: "fas fa-comment-dots",
      description: "Advanced techniques in prompt engineering for AI models",
      category: "AI/ML"
    },
    {
      title: "Data Visualization",
      issuer: "Futurense Technologies", 
      date: "Feb 2024 – Mar 2024",
      icon: "fas fa-chart-bar",
      description: "Mastering data visualization tools and techniques",
      category: "Data Analytics"
    },
    {
      title: "Machine Learning",
      issuer: "Internshala",
      date: "2023",
      icon: "fas fa-robot",
      description: "Comprehensive machine learning algorithms and applications",
      category: "AI/ML"
    },
    {
      title: "Tableau Beginner Certificate",
      issuer: "Coursera",
      date: "Aug 2023 – May 2024",
      icon: "fas fa-chart-pie",
      description: "Data visualization and dashboard creation with Tableau",
      category: "Data Analytics"
    },
    {
      title: "AI Foundations: Thinking Machines",
      issuer: "LinkedIn Learning", 
      date: "2021",
      icon: "fas fa-brain",
      description: "Fundamentals of artificial intelligence and machine learning",
      category: "AI/ML"
    },
    {
      title: "BI Dashboard with Google Data Studio",
      issuer: "Coursera",
      date: "2021",
      icon: "fas fa-tachometer-alt",
      description: "Building business intelligence dashboards with Google Data Studio",
      category: "Business Intelligence"
    }
  ];

  const publications = [
    {
      title: "Self Defence and Safety Monitoring System",
      publisher: "IEEE",
      date: "2023",
      description: "AI-powered wearable with emotion recognition, automatic alert system, and real-time monitoring for personal security. This innovative system combines computer vision, IoT, and real-time analytics to provide comprehensive personal safety solutions.",
      link: "https://ieeexplore.ieee.org/document/10074098",
      icon: "fas fa-shield-alt",
      technologies: ["AI", "Computer Vision", "IoT", "Real-time Systems", "Emotion Recognition", "Cloud Computing"],
      achievements: [
        "Real-time emotion recognition and threat detection",
        "Automatic emergency alert system with location tracking",
        "IoT-enabled wearable device with multiple sensors",
        "Cloud-based monitoring and analytics platform",
        "Mobile application for real-time alerts and control"
      ],
      status: "Published"
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Certifications & Publications</h1>
          <p>Professional credentials and research contributions</p>
        </div>
      </section>

      <section className="section page-content">
        <div className="container">
          {/* Certifications Section */}
          <div className="section-header">
            <h2>
              <i className="fas fa-award"></i>
              Professional Certifications
            </h2>
            <p>Validated expertise in AI, Data Science, and Business Intelligence</p>
          </div>

          <div className="certifications-grid-modern">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card-modern">
                <div className="cert-header">
                  <div className="cert-icon-modern">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="cert-title-section">
                    <h3>{cert.title}</h3>
                    <span className="cert-category">{cert.category}</span>
                  </div>
                </div>
                <div className="cert-body">
                  <p className="cert-issuer">
                    <i className="fas fa-building"></i>
                    {cert.issuer}
                  </p>
                  <p className="cert-description">{cert.description}</p>
                </div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar"></i>
                    {cert.date}
                  </span>
                  <div className="cert-badge">
                    <i className="fas fa-certificate"></i>
                    Certified
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Publications Section */}
          <div className="section-header" style={{marginTop: '4rem'}}>
            <h2>
              <i className="fas fa-book-open"></i>
              Research Publications
            </h2>
            <p>Academic contributions and research work</p>
          </div>

          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card-modern">
                <div className="publication-header">
                  <div className="publication-icon">
                    <i className={pub.icon}></i>
                  </div>
                  <div className="publication-title-section">
                    <h3>{pub.title}</h3>
                    <div className="publication-meta">
                      <span className="publisher-badge">
                        <i className="fas fa-university"></i>
                        {pub.publisher}
                      </span>
                      <span className="publication-date">
                        <i className="fas fa-clock"></i>
                        {pub.date}
                      </span>
                      <span className="status-badge published">
                        <i className="fas fa-check-circle"></i>
                        {pub.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="publication-body">
                  <p className="publication-description">{pub.description}</p>

                  <div className="publication-features">
                    <h4>
                      <i className="fas fa-star"></i>
                      Key Achievements
                    </h4>
                    <div className="features-grid">
                      {pub.achievements.map((achievement, idx) => (
                        <div key={idx} className="feature-item">
                          <i className="fas fa-check"></i>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="technologies-section">
                    <h4>
                      <i className="fas fa-cogs"></i>
                      Technologies Used
                    </h4>
                    <div className="tech-tags-grid">
                      {pub.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-modern">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="publication-footer">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ieee-button"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View IEEE Publication
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;