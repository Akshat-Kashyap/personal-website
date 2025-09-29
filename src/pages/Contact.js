import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xzzjeaqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this CSS for status messages
  const statusStyles = {
    success: {
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      color: '#10b981'
    },
    error: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: '#ef4444'
    }
  };

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
            {/* Contact Information - Keep this part same */}
            <div className="contact-info-section">
              <div className="modern-card">
                <h3>Let's Connect</h3>
                <p>
                  I'm always open to discussing new opportunities in Data Science, 
                  AI/ML Engineering, and Data Analysis roles. Whether you have a 
                  project in mind or just want to connect, feel free to reach out!
                </p>

                <div className="contact-info-cards">
                  {/* Your existing contact info cards */}
                </div>

                <div className="social-section">
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    {/* Your existing social links */}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Updated */}
            <div className="contact-form-section">
              <div className="modern-card">
                <h3>Send Message</h3>
                
                {/* Status Message */}
                {submitStatus === 'success' && (
                  <div className="form-status" style={statusStyles.success}>
                    <i className="fas fa-check-circle"></i>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-status" style={statusStyles.error}>
                    <i className="fas fa-exclamation-circle"></i>
                    Sorry, there was an error sending your message. Please try again or email me directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="Enter message subject"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message here..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
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
