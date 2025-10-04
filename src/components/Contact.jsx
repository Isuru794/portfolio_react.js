import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import instagramIcon from '../img/instagram.png';
import facebookIcon from '../img/facebook.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Your contact details
  const contactInfo = {
    email: 'isurusumedha872@gmail.com',
    phone: '+94 71 356 0794',
    location: 'Colombo, Sri Lanka',
    whatsapp: '+94713560794'
  };

  // Social Links with imported icons - UPDATE WITH YOUR ACTUAL LINKS
  const socialLinks = [
    {
      name: 'GitHub',
      icon: githubIcon,
      url: 'https://github.com/Isuru794'
    },
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'www.linkedin.com/in/isuru-sumedha-7288b2263'
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: 'https://www.instagram.com/isur_u__/'
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: 'https://web.facebook.com/isuru.sumedha.54'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default email client with pre-filled content
    window.open(`mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = `Hello! I'm interested in your services.`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={itemVariants}>
            <div className="contact-badge">Get In Touch</div>
            <h2 className="contact-title">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="contact-subtitle">
              I'm always open to discussing new opportunities, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div className="contact-info" variants={itemVariants}>
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                Feel free to reach out to me through any of these channels. 
                I'll get back to you as soon as possible!
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                <motion.div 
                  className="contact-item"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-item"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h4>Phone / WhatsApp</h4>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-item"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <span>{contactInfo.location}</span>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                className="whatsapp-btn"
                onClick={openWhatsApp}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <span className="whatsapp-icon">💬</span>
                Chat on WhatsApp
              </motion.button>

              {/* Social Links */}
              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      title={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className="social-icon"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Me a Message</h3>
                
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
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Opening Email...
                    </>
                  ) : (
                    'Send Message via Email'
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Email client opened! Please send your message.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;