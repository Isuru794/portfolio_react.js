import { useState, useEffect } from 'react';
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
  // Technical Skills with colors
  const technicalSkills = [
    { name: 'HTML5', level: 95, logo: htmlLogo, colorClass: 'skill-html' },
    { name: 'CSS3', level: 90, logo: cssLogo, colorClass: 'skill-css' },
    { name: 'JavaScript', level: 88, logo: jsLogo, colorClass: 'skill-js' },
    { name: 'React.js', level: 85, logo: reactLogo, colorClass: 'skill-react' },
    { name: 'PHP', level: 82, logo: phpLogo, colorClass: 'skill-php' },
    { name: 'Laravel', level: 80, logo: laravelLogo, colorClass: 'skill-laravel' },
    { name: 'MySQL', level: 85, logo: mysqlLogo, colorClass: 'skill-mysql' },
    { name: 'Tailwind CSS', level: 88, logo: tailwindLogo, colorClass: 'skill-tailwind' }
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

  // State for animated numbers
  const [summaryNumbers, setSummaryNumbers] = useState({
    technical: 0,
    soft: 0,
    experience: 0,
    projects: 0
  });

  // Animate summary numbers
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setSummaryNumbers({
          technical: Math.floor(technicalSkills.length * progress),
          soft: Math.floor(softSkills.length * progress),
          experience: Math.floor(3 * progress),
          projects: Math.floor(20 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setSummaryNumbers({
            technical: technicalSkills.length,
            soft: softSkills.length,
            experience: 3,
            projects: 20
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    animateNumbers();
  }, [technicalSkills.length, softSkills.length]);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-content">
          {/* Header */}
          <div className="skills-header">
            <div className="skills-badge">My Skills</div>
            <h2 className="skills-title">
              Technical <span className="gradient-text">Expertise</span> & 
              <span className="gradient-text"> Soft Skills</span>
            </h2>
            <p className="skills-subtitle">
              A blend of cutting-edge technical skills and essential soft skills 
              that help me deliver exceptional digital experiences.
            </p>
          </div>

          {/* Main Skills Layout - 2 Columns */}
          <div className="skills-main">
            {/* Technical Skills Column */}
            <div className="skills-column">
              <div className="skills-column-header">
                <div className="skills-column-icon">💻</div>
                <h3 className="skills-column-title">Technical Skills</h3>
              </div>
              
              {/* 2 columns, 4 rows grid */}
              <div className="technical-skills-grid">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className={`technical-skill-item ${skill.colorClass}`}>
                    <div className="skill-logo-container">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="skill-logo"
                      />
                      <div className="skill-logo-bg"></div>
                    </div>
                    <div className="skill-content">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level-bar">
                        <div 
                          className="skill-level-progress"
                          style={{ width: `${skill.level}%`, backgroundColor: 'var(--accent)' }}
                        />
                      </div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Column */}
            <div className="skills-column">
              <div className="skills-column-header">
                <div className="skills-column-icon">🌟</div>
                <h3 className="skills-column-title">Soft Skills</h3>
              </div>
              
              {/* 2 columns, 3 rows grid */}
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={skill.name} className="soft-skill-item">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="skills-summary">
            <div className="summary-item">
              <span className="summary-number">{summaryNumbers.technical}+</span>
              <span className="summary-label">Technical Skills</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{summaryNumbers.soft}+</span>
              <span className="summary-label">Soft Skills</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{summaryNumbers.experience}+</span>
              <span className="summary-label">Years Experience</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{summaryNumbers.projects}+</span>
              <span className="summary-label">Projects Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;