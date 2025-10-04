import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education-experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      let currentActive = 'home'; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          // Check if current scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentActive = section;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setIsDarkMode(systemPrefersDark);
      document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    window.addEventListener('scroll', handleScroll);
    // Initial check when component mounts
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (section) => {
    return activeSection === section ? 'active' : '';
  };

  const handleHireMe = () => {
    scrollToSection('contact');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('home')}`} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('about')}`} 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('education-experience')}`} 
              onClick={() => scrollToSection('education-experience')}
            >
              Education
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('skills')}`} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('projects')}`} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive('contact')}`} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Right Side - Theme Toggle and CTA */}
        <div className="nav-right">
          {/* Theme Toggle */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-track">
              <div className={`theme-toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </div>
          </button>

          {/* CTA Button */}
          <button className="nav-cta" onClick={handleHireMe}>
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('home')}`} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('about')}`} 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('education-experience')}`} 
              onClick={() => scrollToSection('education-experience')}
            >
              Education
            </button>
          </li>
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('skills')}`} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('projects')}`} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('contact')}`} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
          
          <li className="mobile-nav-item">
            <button className="mobile-nav-cta" onClick={handleHireMe}>
              Hire Me
            </button>
          </li>
          <li className="mobile-nav-item mobile-theme-item">
            <button 
              className="mobile-theme-toggle"
              onClick={toggleTheme}
            >
              <span>{isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;