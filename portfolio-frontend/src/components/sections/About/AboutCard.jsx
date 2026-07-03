import { motion } from "framer-motion";

const AboutCard = ({ title, value }) => {
  return (
    <motion.div
      className="about-row"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="about-row-label">{title}</span>
      <span className="about-row-line" />
      <span className="about-row-value">{value}</span>
    </motion.div>
  );
};

export default AboutCard;
