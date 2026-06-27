import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -10,
        scale: 1.02
      }}
    >
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github}>GitHub</a>
        <a href={project.live}>Live</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;