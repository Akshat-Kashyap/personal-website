import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "akshatkashyap.work@gmail.com",
      link: "mailto:akshatkashyap.work@gmail.com"
    },
    {
      icon: "fas fa-phone", 
      title: "Phone",
      content: "+91 7007241423",
      link: "tel:+917007241423"
    },
    {
      icon: "fas fa-briefcase",
      title: "Status", 
      content: "Open to Opportunities",
      link: "#"
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's discuss opportunities and collaborations</p>
        </div>
      </section>

      <section className="section page-content">
        <div className="container">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Feel free to reach out for project discussions, opportunities, or just to connect</p>
          </div>

          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="modern-card">
                <h3>Let's Connect</h3>
                <p>
                  I'm always open to discussing new opportunities in Data Science, 
                  AI/ML Engineering, and Data Analysis roles. Whether you have a 
                  project in mind or just want to connect, feel free to reach out!
                </p>

                <div className="contact-info-cards">
                  {contactInfo.map((info, index) => (
                    <a key={index} href={info.link} className="contact-info-card">
                      <div className="contact-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        <p>{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="social-section">
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/akshat-kashyap17" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Akshat-Kashyap" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fas fa-chart-bar"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="modern-card">
                <h3>Send Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="Enter message subject"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;