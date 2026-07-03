import AboutCard from "./AboutCard";
import "../../../css/about.css";
import useScrollReveal from "../../../hooks/useScrollReveal";

const rows = [
  { title: "Projects shipped", value: "9+" },
  { title: "Technologies", value: "14+" },
  { title: "Learning pace", value: "Daily" },
  { title: "Based in", value: "Bhopal, IN" },
];

const About = () => {
  const sectionRef = useScrollReveal(".about-left > *, .about-row");

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container about-container">

        <div className="about-left">
          <span className="section-tag">About Me</span>

          <h2>
            Passionate Full Stack MERN Developer
          </h2>

          <p>
            I'm Yash, a Full Stack MERN Developer focused on creating fast, scalable, and user-friendly web applications. I enjoy turning ideas into modern digital experiences with clean code, responsive design, and seamless user interactions.
          </p>
        </div>

        <div className="about-right">
          {rows.map((row) => (
            <AboutCard
              key={row.title}
              title={row.title}
              value={row.value}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
