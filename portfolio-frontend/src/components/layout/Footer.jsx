import "../../css/footer.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-logo">
          Yash Kushwaha<span>...</span>
        </div>

        <div className="footer-social">
          <motion.a href="https://github.com/yashpratapkushwaha966" target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.1 }}>
            <FaGithub />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/yash-fsd" target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.1 }}>
            <FaLinkedin />
          </motion.a>

          <motion.a href="https://www.instagram.com/yash_pratap_kushwaha?igsh=MW5pM3F1cGtsZjdybw==" target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.1 }}>
            <FaInstagram />
          </motion.a>

          <motion.a href="https://x.com/YashK37303" target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.1 }}>
            <FaXTwitter />
          </motion.a>

          <motion.a href="mailto:yashkushwaha485005@gmail.com" 
          whileHover={{ y: -6, scale: 1.1 }}>
            <FaEnvelope />
            </motion.a>

          <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.1 }}>
            <FaWhatsapp />
          </motion.a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Yash. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;