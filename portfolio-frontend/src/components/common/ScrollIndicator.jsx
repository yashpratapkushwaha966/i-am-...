import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="scroll-indicator"
      animate={{ y: [0, 12, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    ><a href="#contact">
      ↓
    </a></motion.div>
  );
};

export default ScrollIndicator;