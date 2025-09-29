import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: "NYC Taxi Analysis",
      description: "Exploratory analysis of NYC Yellow Taxi trip data uncovering trends in demand, fare behavior, passenger dynamics, and zone-based activity. Provides actionable insights for optimizing taxi operations and pricing strategy.",
      technologies: ["Python", "Pandas", "EDA", "Data Visualization", "Statistical Analysis"],
      github: "https://github.com/Akshat-Kashyap/NYC-TAXI-ANALYSIS",
      category: "data-analysis",
      icon: "fas fa-taxi",
      status: "completed",
      features: [
        "Analyzed 10M+ taxi trip records",
        "Identified peak demand patterns and pricing optimization opportunities",
        "Created interactive visualizations for business insights",
        "Provided strategic recommendations for fleet management"
      ]
    },
    {
      title: "Ames Housing Analysis",
      description: "Exploratory data analysis of the Ames Housing dataset to uncover key market trends and pricing factors, delivering actionable real-estate insights under mentor guidance.",
      technologies: ["Python", "EDA", "Real Estate Analytics", "Statistical Analysis", "Machine Learning"],
      github: "https://github.com/Akshat-Kashyap/Ames-Housing-Analysis",
      category: "data-analysis",
      icon: "fas fa-home",
      status: "completed",
      features: [
        "Comprehensive housing market analysis",
        "Feature engineering for price prediction",
        "Statistical modeling and hypothesis testing",
        "Market trend identification and visualization"
      ]
    },
    {
      title: "Airbnb Data Analysis",
      description: "Analyzed Airbnb data to identify pricing trends, occupancy rates, and seasonal patterns. Built interactive Power BI dashboards and implemented SQL for efficient processing.",
      technologies: ["Power BI", "SQL", "Data Visualization", "Business Intelligence", "Dashboard Design"],
      github: "https://github.com/prathamchopra001/Airbnb-Analysis",
      category: "business-intelligence",
      icon: "fas fa-bed",
      status: "completed",
      features: [
        "Designed interactive Power BI dashboards",
        "Optimized SQL queries for data extraction",
        "Identified seasonal pricing patterns",
        "Created occupancy rate forecasting models"
      ]
    },
    {
      title: "ChiroCareAI – Patient Progress Tracking",
      description: "Built an ML system to evaluate patient condition before and after chiropractic treatment, highlighting effectiveness of medical support. Implemented predictive models to track patient recovery progress and treatment outcomes.",
      technologies: ["Machine Learning", "Healthcare", "Python", "Predictive Analytics", "NLP"],
      github: "#",
      category: "machine-learning",
      icon: "fas fa-stethoscope",
      status: "completed",
      features: [
        "Patient progress prediction models",
        "Treatment effectiveness analysis",
        "Automated progress reporting",
        "Clinical decision support system"
      ]
    },
    {
      title: "Census Data Analysis with ETL",
      description: "Developed an ETL pipeline for Census healthcare data. Ensured data integrity and structure for in-depth healthcare analysis, enabling insights into public health infrastructure and accessibility.",
      technologies: ["ETL", "Data Engineering", "Python", "SQL", "Data Pipeline", "Data Warehousing"],
      github: "https://github.com/iamA333/ETL-Healthcare-Census",
      category: "data-engineering",
      icon: "fas fa-database",
      status: "completed",
      features: [
        "Built scalable ETL pipeline",
        "Data quality validation and cleaning",
        "Healthcare infrastructure analysis",
        "Public health insights generation"
      ]
    }
  ];

  const ongoingProjects = [
    {
      title: "MannMitra - AI Wellness Companion",
      description: "Your Confidential AI Wellness Companion - Ongoing Google AI Hackathon project. A culturally aware, AI-powered platform designed to provide empathetic, stigma-free, and confidential mental wellness support to Indian youth.",
      technologies: ["Generative AI", "Google Cloud", "Vertex AI", "Firebase", "Dialogflow", "NLP"],
      github: "https://github.com/anodicpassion/ManMitra",
      category: "ai-ml",
      icon: "fas fa-brain",
      status: "ongoing",
      features: [
        "24×7 Confidential AI Chat Companion with emotion-aware responses",
        "Personalized Wellness Journeys with daily nudges and coping toolkits",
        "Anonymous Peer-Support Circles with AI moderation",
        "Early Intervention & Escalation for high-distress signals",
        "Cultural Sensitivity & Multilingual Support for Indian languages",
        "Privacy by Design with end-to-end encryption"
      ],
      techStack: [
        "Generative AI: Vertex AI, PaLM 2 / Gemini, Dialogflow CX",
        "Language: Cloud Translation API for multilingual support",
        "Analytics: BigQuery + Looker for insights",
        "Backend: Cloud Functions, Firebase",
        "Mobile: Firebase for app hosting and authentication"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-layer-group' },
    { id: 'data-analysis', name: 'Data Analysis', icon: 'fas fa-chart-line' },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: 'fas fa-chart-bar' },
    { id: 'machine-learning', name: 'Machine Learning', icon: 'fas fa-robot' },
    { id: 'data-engineering', name: 'Data Engineering', icon: 'fas fa-database' },
    
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Projects Portfolio</h1>
          <p>Data Science, AI/ML, and Data Engineering Projects</p>
        </div>
      </section>

      <section className="section page-content">
        <div className="container">
          {/* Ongoing Projects Section */}
          <div className="section-header">
            <h2>
              <i className="fas fa-rocket"></i>
              Ongoing Projects
            </h2>
            <p>Current projects and active development work</p>
          </div>

          <div className="projects-grid-modern">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="project-card-modern ongoing">
                <div className="project-header">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="status-badge ongoing">
                        <i className="fas fa-sync-alt"></i>
                        In Progress
                      </span>
                      <span className="project-category">
                        <i className="fas fa-tag"></i>
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <span className="hackathon-badge">
                        <i className="fas fa-trophy"></i>
                        Google AI Hackathon
                      </span>
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>
                      <i className="fas fa-star"></i>
                      Key Features
                    </h4>
                    <div className="features-grid">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <i className="fas fa-check"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="technologies-section">
                    <h4>
                      <i className="fas fa-cogs"></i>
                      Technology Stack
                    </h4>
                    <div className="tech-tags-grid">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-modern">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <a href={project.github} className="project-link-btn">
                    <i className="fab fa-github"></i>
                    View Repository
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Completed Projects Section */}
          <div className="section-header" style={{marginTop: '4rem'}}>
            <h2>
              <i className="fas fa-check-circle"></i>
              Completed Projects
            </h2>
            <p>Past projects showcasing data science and engineering expertise</p>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div className="projects-grid-modern">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card-modern">
                <div className="project-header">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="status-badge completed">
                        <i className="fas fa-check-circle"></i>
                        Completed
                      </span>
                      <span className="project-category">
                        <i className="fas fa-tag"></i>
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>
                      <i className="fas fa-tasks"></i>
                      Project Highlights
                    </h4>
                    <div className="features-grid">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <i className="fas fa-check"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="technologies-section">
                    <h4>
                      <i className="fas fa-tools"></i>
                      Technologies Used
                    </h4>
                    <div className="tech-tags-grid">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-modern">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    <i className="fab fa-github"></i>
                    View Code
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

export default Projects;