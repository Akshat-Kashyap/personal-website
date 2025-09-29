import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Trainee",
      company: "Innodeed Systems",
      period: "Jun 2024 – Feb 2025",
      location: "Bangalore, India",
      achievements: [
        "Developed AI/ML models to optimize performance and accuracy for real-world applications",
        "Implemented LLMs integrated with Vector Databases for semantic search and RAG",
        "Configured Redis for real-time processing, reducing latency by 40%",
        "Applied NLP techniques to extract insights, improving information retrieval"
      ],
      technologies: ["AI/ML", "LLMs", "Vector Databases", "Redis", "NLP", "Python"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Data Engineer Intern", 
      company: "Futurense Technologies",
      period: "Jan 2024 – May 2024",
      location: "Bangalore, India",
      achievements: [
        "Performed EDA on Census 2011 data to identify trends in hospitals and infrastructure",
        "Optimized SQL queries, improving extraction efficiency by 30%",
        "Designed Power BI dashboards used by 50+ stakeholders",
        "Conducted Airbnb data analysis to reveal pricing and seasonal patterns"
      ],
      technologies: ["EDA", "SQL", "Power BI", "Data Analysis", "Python", "ETL"],
      icon: "fas fa-database"
    },
    {
      title: "Data Science Intern",
      company: "Suvidha Foundation", 
      period: "Feb 2023 – Mar 2023",
      location: "India (Remote)",
      achievements: [
        "Built an NLP-based ML model for news classification with 25% improved accuracy",
        "Applied feature engineering and sentiment analysis to derive insights from text",
        "Developed data preprocessing pipelines for unstructured text data"
      ],
      technologies: ["NLP", "Machine Learning", "Feature Engineering", "Sentiment Analysis", "Python"],
      icon: "fas fa-robot"
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Professional Experience</h1>
          <p>My journey in AI, Data Engineering, and Machine Learning</p>
        </div>
      </section>

      <section className="section page-content">
        <div className="container">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p>Professional roles and accomplishments in data science and engineering</p>
          </div>

          <div className="experience-cards-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="modern-card experience-card-hover">
                <div className="experience-header">
                  <div className="experience-icon">
                    <i className={exp.icon}></i>
                  </div>
                  <div className="experience-title-section">
                    <h3>{exp.title}</h3>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-meta">
                      <span className="experience-period">
                        <i className="fas fa-calendar"></i>
                        {exp.period}
                      </span>
                      <span className="experience-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-body">
                  <h4>Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="technologies-used">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;