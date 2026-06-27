import "../../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Name */}
        <div className="footer-logo">
          Yash<span>.</span>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">Twitter</a>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Yash. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;