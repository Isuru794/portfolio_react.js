import { useState } from 'react';
import { motion } from 'framer-motion';
import './EducationExperience.css';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) in Software Engineering",
      institution: "Saegis Campus",
      period: "2022 - Present",
      status: "Undergraduate",
      description: "Currently pursuing my degree in Software Engineering with focus on modern software development practices, algorithms, and system design."
    },
    {
      id: 2,
      qualification: "GCE Advanced Level",
      institution: "R/Eheliyagoda Central College",
      period: "2018 - 2020",
      stream: "Technology Stream",
      description: "Completed Advanced Level examination in PTechnology stream."
    },
    {
      id: 3,
      qualification: "GCE Ordinary Level",
      institution: "R/Eheliyagoda Central College", 
      period: "2017",
      description: "Completed Ordinary Level examination with excellent results, showing early aptitude for technical subjects."
    }
  ];

  const experienceData = [
    {
      id: 1,
      position: "Software Engineering Intern",
      company: "Apptota Solutions",
      period: "2023 - 2024",
      duration: "6 Months",
      description: "Completed intensive internship program focusing on full-stack development and software engineering best practices.",
      responsibilities: [
        "Developed and maintained web applications using React.js",
        "Collaborated with senior developers on real-world projects",
        "Participated in code reviews and agile development processes",
        "Implemented responsive UI designs and RESTful APIs"
      ],
      technologies: ["React", "PHP Laravel", "JavaScript", "MySQL", "Git"]
    },
  
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="education-experience" id="education-experience">
      <div className="container">
        <motion.div 
          className="section-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">My Journey</div>
            <h2 className="section-title">
              Education & <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-description">
              My academic background and professional journey in software engineering.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="tab-navigation" variants={itemVariants}>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
          </motion.div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div 
                className="education-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="education-grid">
                  {educationData.map((edu, index) => (
                    <motion.div 
                      key={edu.id}
                      className="education-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="card-header">
                        <h3 className="card-title">
                          {edu.degree || edu.qualification}
                        </h3>
                        <span className="card-period">{edu.period}</span>
                      </div>
                      
                      <div className="card-institution">
                        {edu.institution}
                        {edu.status && <span className="status-badge">{edu.status}</span>}
                        {edu.stream && <span className="stream-badge">{edu.stream}</span>}
                      </div>
                      
                      <p className="card-description">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div 
                className="experience-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="experience-grid">
                  {experienceData.map((exp, index) => (
                    <motion.div 
                      key={exp.id}
                      className="experience-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="card-header">
                        <div className="position-info">
                          <h3 className="card-title">{exp.position}</h3>
                          <div className="company-period">
                            <span className="company">{exp.company}</span>
                            <span className="card-period">{exp.period}</span>
                            {exp.duration && <span className="duration-badge">{exp.duration}</span>}
                          </div>
                        </div>
                      </div>
                      
                      <p className="card-description">{exp.description}</p>

                      <div className="responsibilities-section">
                        <h4>Key Responsibilities:</h4>
                        <ul className="responsibilities-list">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="technologies-section">
                        <h4>Technologies Used:</h4>
                        <div className="technologies-list">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;