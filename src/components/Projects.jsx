import { motion } from 'framer-motion';
import './Projects.css';

// Import project images
import project1Img from '../img/quickbill.png';
import project2Img from '../img/apptota.png';
import project3Img from '../img/metromart.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Quick-Bill POS System",
      image: project1Img,
      technologies: ["PHP", "HTML", "CSS", "JS"]
    },
    {
      id: 2,
      name: "Apptota Solutions - Website",
      image: project2Img,
      technologies: ["PHP", "HTML", "CSS", "JS"]
    },
    {
      id: 3,
      name: "Metromart - Website",
      image: project3Img,
      technologies: ["PHP", "HTML", "CSS", "JS"]
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
    hidden: { y: 50, opacity: 0 },
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
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="projects-header" variants={itemVariants}>
            <div className="projects-badge">My Work</div>
            <h2 className="projects-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="projects-subtitle">
              A collection of projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  
                  <div className="technologies-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;