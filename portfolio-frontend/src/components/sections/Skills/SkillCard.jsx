import { motion } from "framer-motion";

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>

      <div className="skill-list">
        {items.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;