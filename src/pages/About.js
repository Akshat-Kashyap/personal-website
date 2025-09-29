// Updated About.js - Symmetrical Skills Section
import React from 'react';

const About = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      items: [
        "Deep Learning", "Natural Language Processing", "Computer Vision", 
        "Predictive Modeling", "Neural Networks", "TensorFlow", "PyTorch"
      ],
      color: "#8b5cf6"
    },
    {
      category: "Data Engineering",
      icon: "fas fa-database",
      items: [
        "Python & Pandas", "SQL & NoSQL", "ETL Pipelines", "Data Warehousing", 
        "Big Data", "Redis", "Apache Spark"
      ],
      color: "#3b82f6"
    },
    {
      category: "Data Analytics & BI",
      icon: "fas fa-chart-bar",
      items: [
        "Power BI", "Tableau", "Statistical Analysis", "Data Visualization", 
        "Business Intelligence", "Excel", "Data Storytelling"
      ],
      color: "#06b6d4"
    },
    {
      category: "Cloud & Tools",
      icon: "fas fa-cloud",
      items: [
        "Google Cloud", "Docker", "Git & GitHub", "Linux", 
        "Jupyter Notebooks", "VS Code", "MLflow"
      ],
      color: "#10b981"
    }
  ];

  const education = [
    {
      degree: "Advanced Certificate Program in Data Science",
      institution: "International Institute of Information Technology, Bangalore (IIIT-B)",
      period: "Jun 2025 – Present",
      description: "Program includes core subjects in statistics, programming, machine learning, and data analytics. Facilitated by upGrad.",
      icon: "fas fa-university"
    },
    {
      degree: "B.Tech, Computer Science and Engineering (AI & ML)",
      institution: "Jain (Deemed-to-be) University, Bangalore", 
      period: "2020 – 2024",
      description: "CGPA: 8.6 | Specialized in Artificial Intelligence and Machine Learning",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Me</h1>
          <p>Data Science Professional | AI Engineer | Data Analyst</p>
        </div>
      </section>

      <section className="section page-content">
        <div className="container">
          {/* Professional Summary */}
          <div className="section-header">
            <h2>Professional Summary</h2>
          </div>

          <div className="modern-card">
            <div className="about-summary">
              <p>
                Aspiring data science professional with a B.Tech in Computer Science and Engineering (AI & ML), 
                currently enrolled in the Advanced Certificate Program in Data Science at IIIT Bangalore. 
                Eager to apply strong analytical and programming skills to solve real-world problems, and to 
                contribute to innovative, data-driven solutions in a challenging technical environment.
              </p>
              <p>
                With expertise in AI/ML, data engineering, and business intelligence, I specialize in 
                transforming complex data into actionable insights and building intelligent systems that 
                drive business value and innovation.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="section-header" style={{marginTop: '4rem'}}>
            <h2>Education</h2>
          </div>

          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="modern-card education-card">
                <div className="education-header">
                  <div className="education-icon">
                    <i className={edu.icon}></i>
                  </div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Redesigned Skills Section - Symmetrical */}
          <div className="section-header" style={{marginTop: '4rem'}}>
            <h2>Technical Skills</h2>
            <p>Comprehensive expertise in data science and AI technologies</p>
          </div>

          <div className="skills-symmetrical-grid">
            {skills.map((skillCategory, index) => (
              <div key={index} className="skill-category-symmetrical">
                <div className="skill-category-header-sym">
                  <div className="skill-category-icon-sym" style={{backgroundColor: skillCategory.color}}>
                    <i className={skillCategory.icon}></i>
                  </div>
                  <h3>{skillCategory.category}</h3>
                </div>
                <div className="skills-tags-sym">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag-sym">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;