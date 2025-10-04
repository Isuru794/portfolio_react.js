import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

// Import your local images
import aboutImage1 from '../img/about1.jpg';
import aboutImage2 from '../img/about2.jpg';


const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0
  });
  const intervalRef = useRef(null);
  const statsRef = useRef(null);

  const images = [
    aboutImage1,
    aboutImage2,
   
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  // Count animation function
  const animateCount = (endValue, setter, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
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
            // Start counting animations
            animateCount(50, (value) => setStats(prev => ({ ...prev, projects: value })), 2000);
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

  useEffect(() => {
    intervalRef.current = setInterval(startAnimation, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  // Create grid pieces for the image breakdown
  const gridPieces = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Centered Badge */}
        <motion.div 
          className="about-badge-centered"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Content */}
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h2 className="about-title" variants={itemVariants}>
              Crafting Digital <span className="gradient-text">Experiences</span> That Inspire
            </motion.h2>

            <motion.p className="about-description" variants={itemVariants}>
              I'm a passionate <span className="highlight">Fullstack Developer</span> with 
              over 3 years of experience creating digital solutions that make a difference. 
              I believe in the power of code to transform ideas into reality.
            </motion.p>

            <motion.p className="about-description" variants={itemVariants}>
              My journey started with curiosity about how websites work, and it has evolved 
              into a career where I get to build amazing products every day. I specialize in 
              creating seamless user experiences with cutting-edge technologies.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="about-stats" 
              variants={itemVariants}
              ref={statsRef}
            >
              <div className="stat">
                <span className="stat-number">{stats.projects}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.experience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.satisfaction}%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div className="skills-section" variants={itemVariants}>
              <h3 className="skills-title">Technologies I Work With</h3>
              <div className="skills-grid">
                {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'Express', 'Next.js'].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Animation */}
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-animation-container">
              {/* Main Image Display */}
              <AnimatePresence mode="wait">
                {!isAnimating && (
                  <motion.div
                    key={`main-${currentImageIndex}`}
                    className="main-image-wrapper"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src={images[currentImageIndex]} 
                      alt="About Me"
                      className="main-image"
                      onError={(e) => {
                        // Fallback if local image fails to load
                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
                      }}
                    />
                    <div className="image-glow"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Breaking Animation */}
              <AnimatePresence>
                {isAnimating && (
                  <motion.div 
                    className="breaking-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {gridPieces.map((piece) => {
                      const row = Math.floor(piece / 4);
                      const col = piece % 4;
                      const delay = (row * 4 + col) * 0.1;
                      
                      return (
                        <motion.div
                          key={piece}
                          className="grid-piece"
                          initial={{ 
                            scale: 1,
                            opacity: 1,
                            filter: "blur(0px)",
                            x: 0,
                            y: 0
                          }}
                          animate={{ 
                            scale: [1, 1.2, 0.8],
                            opacity: [1, 0.8, 0],
                            filter: "blur(10px)",
                            x: (col - 1.5) * 50,
                            y: -100 - (row * 30)
                          }}
                          transition={{
                            duration: 1.5,
                            delay: delay,
                            ease: "easeOut"
                          }}
                          style={{
                            backgroundImage: `url(${images[currentImageIndex]})`,
                            backgroundPosition: `${(col / 3) * 100}% ${(row / 3) * 100}%`,
                            backgroundSize: '400% 400%'
                          }}
                        />
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Background Elements */}
              <div className="floating-elements">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="floating-element"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  >
                    {['⚡', '🚀', '💻', '🎯', '🔥', '✨'][i]}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Navigation Dots */}
            <div className="image-nav">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    clearInterval(intervalRef.current);
                    setCurrentImageIndex(index);
                    intervalRef.current = setInterval(startAnimation, 5000);
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;