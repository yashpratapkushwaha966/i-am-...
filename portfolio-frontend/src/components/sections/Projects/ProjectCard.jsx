import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      data-index={`0${index}`}
      whileHover={{
        y: -8,
        rotate: index % 2 === 0 ? -0.6 : 0.6,
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