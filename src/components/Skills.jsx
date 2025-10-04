import { motion } from 'framer-motion';
import './Skills.css';

// Import your local skill logos
import htmlLogo from '../img/html.png';
import cssLogo from '../img/css.png';
import jsLogo from '../img/js.png';
import reactLogo from '../img/react.png';
import phpLogo from '../img/php.png';
import laravelLogo from '../img/laravel.png';
import mysqlLogo from '../img/mysql.png';
import tailwindLogo from '../img/tailwind.png';

const Skills = () => {
  // Technical Skills with local logo imports
  const technicalSkills = [
    { 
      name: 'HTML5', 
      level: 95, 
      logo: htmlLogo,
      color: '#E34F26'
    },
    { 
      name: 'CSS3', 
      level: 90, 
      logo: cssLogo,
      color: '#1572B6'
    },
    { 
      name: 'JavaScript', 
      level: 88, 
      logo: jsLogo,
      color: '#F7DF1E'
    },
    { 
      name: 'React.js', 
      level: 85, 
      logo: reactLogo,
      color: '#61DAFB'
    },
    { 
      name: 'PHP', 
      level: 82, 
      logo: phpLogo,
      color: '#777BB4'
    },
    { 
      name: 'Laravel', 
      level: 80, 
      logo: laravelLogo,
      color: '#FF2D20'
    },
    { 
      name: 'MySQL', 
      level: 85, 
      logo: mysqlLogo,
      color: '#4479A1'
    },
    { 
      name: 'Tailwind CSS', 
      level: 88, 
      logo: tailwindLogo,
      color: '#06B6D4'
    }
  ];

  // Soft Skills
  const softSkills = [
    { name: 'Problem Solving', level: 90, icon: '🧩' },
    { name: 'Communication', level: 82, icon: '💬' },
    { name: 'Team Collaboration', level: 89, icon: '👥' },
    { name: 'Time Management', level: 87, icon: '⏰' },
    { name: 'Creativity', level: 92, icon: '🎨' },
    { name: 'Adaptability', level: 89, icon: '🔄' }
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
    hidden: { scale: 0, opacity: 0 },
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
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="skills-header" variants={itemVariants}>
            <div className="skills-badge">My Arsenal</div>
            <h2 className="skills-title">
              Technical <span className="gradient-text">Expertise</span> & 
              <span className="gradient-text"> Soft Skills</span>
            </h2>
            <p className="skills-subtitle">
              A blend of cutting-edge technical skills and essential soft skills 
              that help me deliver exceptional digital experiences.
            </p>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div className="skills-section" variants={itemVariants}>
            <h3 className="section-title">
              <span className="title-icon">💻</span>
              Technical Skills
            </h3>
            <div className="technical-skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="technical-skill-item"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="skill-logo-container">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="skill-logo"
                      onError={(e) => {
                        // Fallback to colored text if image fails to load
                        e.target.style.display = 'none';
                        const fallbackSpan = document.createElement('span');
                        fallbackSpan.className = 'skill-logo-fallback';
                        fallbackSpan.textContent = skill.name.charAt(0);
                        e.target.parentNode.appendChild(fallbackSpan);
                      }}
                    />
                    <div 
                      className="skill-logo-glow"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <div className="skill-content">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level-bar">
                      <div 
                        className="skill-level-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Horizontal Divider */}
          <motion.div 
            className="skills-divider"
            variants={itemVariants}
          >
            <div className="divider-line"></div>
            <div className="divider-icon">🚀</div>
            <div className="divider-line"></div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div className="skills-section" variants={itemVariants}>
            <h3 className="section-title">
              <span className="title-icon">🌟</span>
              Soft Skills
            </h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="soft-skill-item"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <div className="soft-skill-content">
                    <span className="soft-skill-name">{skill.name}</span>
                    <div className="soft-skill-level">
                      <div className="soft-skill-dots">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`dot ${dotIndex < Math.floor(skill.level / 20) ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="soft-skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-item">
              <span className="summary-number">{technicalSkills.length}+</span>
              <span className="summary-label">Technical Skills</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{softSkills.length}+</span>
              <span className="summary-label">Soft Skills</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">3+</span>
              <span className="summary-label">Years Experience</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">20+</span>
              <span className="summary-label">Projects Done</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;