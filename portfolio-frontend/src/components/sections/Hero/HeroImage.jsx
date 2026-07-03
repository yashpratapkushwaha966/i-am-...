import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../../../assets/images/profile.jpg";

const HeroImage = () => {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={profile} alt="Yash Pratap Kushwaha" className="profile-image" />

      <motion.div
        className="tech react"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="tech node"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaNodeJs />
      </motion.div>

      <div className="hero-social">
        <a
          href="mailto:yashkushwaha485005@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/yashpratapkushwaha966"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroImage;
