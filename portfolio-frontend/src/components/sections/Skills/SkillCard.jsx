import { motion } from "framer-motion";

const SkillCard = ({ index, title, items }) => {
  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="skill-index">0{index}</span>

      <div className="skill-row-body">
        <h3>{title}</h3>
        <p>{items.join("  ·  ")}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
