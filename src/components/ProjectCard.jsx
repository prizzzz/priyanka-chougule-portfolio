// ProjectCard.jsx (Ensure this is the structure you are using now)
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
     
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="top-row">
        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Links (Icons) */}
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Code size={20} />
          </a>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      {/* Bullet Points Section */}
      <ul className="bullet-points">
        {project.points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>

      {/* Tech Tags Section */}
      <div className="tech-tags">
        {project.tech.map((t, idx) => (
          <span key={idx}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;