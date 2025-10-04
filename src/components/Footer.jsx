import { useState } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import mailIcon from '../img/mail.png';
import facebookIcon from '../img/facebook.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  // Quick Links
  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  // Services
  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Solutions',
    'UI/UX Design'
  ];

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
      name: 'Email',
      icon: mailIcon,
      url: 'mailto:isurusumedha872@gmail.com'
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: 'https://web.facebook.com/isuru.sumedha.54'
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <motion.div className="footer-brand" variants={itemVariants}>
              <h3 className="brand-name">Isuru Sumedha</h3>
              <p className="brand-tagline">
                Fullstack Developer crafting digital experiences that inspire and innovate.
              </p>
              
              {/* Email Contact */}
              <div className="email-contact">
                <motion.div 
                  className="email-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="email-icon">📧</div>
                  <div className="email-details">
                    <span className="email-label">Email</span>
                    <a href="mailto:isurusumedha872@gmail.com" className="email-value">
                      isurusumedha872@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Newsletter Subscription */}
              <div className="newsletter-section">
                <h4 className="newsletter-title">Stay Updated</h4>
                <p className="newsletter-description">
                  Get notified about my latest projects and updates.
                </p>
                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="email-input"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="subscribe-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </form>
                {isSubscribed && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Thank you for subscribing!
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-links" variants={itemVariants}>
              <h4 className="links-title">Quick Links</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={link.name} className="link-item">
                    <button 
                      onClick={() => scrollToSection(link.section)}
                      className="link-button"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-services" variants={itemVariants}>
              <h4 className="services-title">Services</h4>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={service} className="service-item">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div className="footer-connect" variants={itemVariants}>
              <h4 className="connect-title">Let's Connect</h4>
              <p className="connect-description">
                Ready to start your next project? Let's discuss how I can help bring your ideas to life.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
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

              {/* WhatsApp CTA */}
              <motion.button
                className="whatsapp-cta"
                onClick={() => window.open('https://wa.me/+94713560794', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="whatsapp-icon">💬</span>
                Chat on WhatsApp
              </motion.button>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-copyright">
              <p>&copy; {currentYear} Isuru Sumedha. All rights reserved.</p>
              <p className="footer-motto">Crafting digital excellence</p>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <span className="arrow-up">↑</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;