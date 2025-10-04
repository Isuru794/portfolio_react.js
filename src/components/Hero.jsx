import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import myphoto from '../img/isuru.png';
// Import your CV file - make sure to add your CV to the src/assets folder
import myCV from '../assets/k.k.I.M sumedha CV .pdf';

const Hero = () => {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Count animation function
  const animateCount = (endValue, setter, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setter(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Updated to 20+ projects
            animateCount(20, (value) => setStats(prev => ({ ...prev, projects: value })), 2000);
            animateCount(3, (value) => setStats(prev => ({ ...prev, experience: value })), 1500);
            animateCount(100, (value) => setStats(prev => ({ ...prev, satisfaction: value })), 1800);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Scroll to Projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Download CV function
  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'Isuru-Sumedha-CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Create grid pieces for the floating blocks
  const gridPieces = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section className="hero" id="home">
      {/* Background Floating Elements */}
      <div className="background-elements">
        <div className="floating-bg-element bg-element-1">⚛️</div>
        <div className="floating-bg-element bg-element-2">💻</div>
        <div className="floating-bg-element bg-element-3">🚀</div>
        <div className="floating-bg-element bg-element-4">🔗</div>
        <div className="floating-bg-element bg-element-5">🎨</div>
        <div className="floating-bg-element bg-element-6">⚡</div>
      </div>

      <div className="hero-container" ref={containerRef}>
        <div className="hero-content">
          {/* Text Content - Left Side */}
          <div className="text-content">
            <div className="greeting animate-fade-in">
              👋 Hello, I'm
            </div>

            <h1 className="hero-title animate-slide-up">
              <span className="name-gradient">Isuru Sumedha</span>
            </h1>

            <div className="hero-subtitle animate-slide-up">
              <span className="typing-text">Fullstack Developer</span>
            </div>

            <p className="hero-description animate-fade-in">
              I create <span className="highlight">digital experiences</span> that blend 
              innovative design with robust functionality.
            </p>

            <div className="hero-buttons animate-fade-in">
              <button 
                className="btn btn-primary"
                onClick={scrollToProjects}
              >
                View My Work
              </button>
              
              <button 
                className="btn btn-secondary"
                onClick={downloadCV}
              >
                Download CV
              </button>
            </div>

            <div 
              className="hero-stats animate-fade-in"
              ref={statsRef}
            >
              <div className="stat-item">
                <span className="stat-number">{stats.projects}+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.experience}+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.satisfaction}%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Advanced Image Section - Right Side */}
          <div className="image-content">
            <div className="advanced-image-container">
              {/* Layer 1: Floating Blocks with Transparency */}
              <div className="floating-blocks-layer">
                <div className="blocks-grid">
                  {gridPieces.map((piece) => {
                    const row = Math.floor(piece / 4);
                    const col = piece % 4;
                    const delay = (row * 4 + col) * 0.1;
                    
                    return (
                      <div
                        key={piece}
                        className="floating-block"
                        style={{
                          '--delay': `${delay}s`,
                          '--x-offset': `${(col - 1.5) * 2}px`,
                          '--y-offset': `${(row - 1.5) * 2}px`,
                          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
                        }}
                      >
                        <div 
                          className="block-inner"
                          style={{
                            backgroundImage: `url(${myphoto})`,
                            backgroundPosition: `${(col / 3) * 100}% ${(row / 3) * 100}%`,
                            backgroundSize: '400% 400%',
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Layer 2: Original Image Overlay */}
              <div 
                className="original-image-layer"
                style={{
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                }}
              >
                <div className="image-frame">
                  <img 
                    src={myphoto} 
                    alt="Isuru Sumedha" 
                    className="original-image"
                  />
                  <div className="image-glow-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;