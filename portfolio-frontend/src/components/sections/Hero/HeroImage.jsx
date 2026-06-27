import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import profile from "../../../assets/images/profile.png";

const HeroImage = () => {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-image-circle">

        <img
          src={profile}
          alt="Yash"
          className="profile-image"
        />

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

        <motion.div
          className="tech mongo"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <SiMongodb />
        </motion.div>

        <motion.div
          className="tech express"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <SiExpress />
        </motion.div>

        <motion.div
          className="tech git"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaGitAlt />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroImage;