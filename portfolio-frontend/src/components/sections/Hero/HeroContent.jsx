import { motion } from "framer-motion";
import Button from "../../common/Button";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  return (
    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="hero-tag">
        👋 Hello, I'm
      </span>

      <h1>
        Yash Pratap
        <br />
        <span>Kushwaha</span>
      </h1>

      <h2 className="typing-text">
  <Typewriter
    words={[
      "Full Stack MERN Developer",
      "React.js Developer",
      "Node.js Backend Developer",
      "UI Animation Enthusiast"
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1800}
  />
</h2>

      <p>
        I build fast, modern and responsive web applications using
        React, Node.js, Express.js and MongoDB.
      </p>

      <div className="hero-buttons">
        <Button title="Hire Me" href="#contact" />
        <Button title="Download Resume" href="/resume.pdf"  />
        <div className="hero-stats">

  <div>
    <h3>9+</h3>
    <span>Projects</span>
  </div>

  <div>
    <h3>1+</h3>
    <span>Years Learning</span>
  </div>

  <div>
    <h3>100%</h3>
    <span>Passion</span>
  </div>

</div>
      </div>
    </motion.div>
  );
};

export default HeroContent;