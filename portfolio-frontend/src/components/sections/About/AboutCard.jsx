import { motion } from "framer-motion";

const AboutCard = ({ title, value }) => {
  return (
    <motion.div
      className="about-card"
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
    >
      <h3>{value}</h3>
      <p>{title}</p>
    </motion.div>
  );
};

export default AboutCard;