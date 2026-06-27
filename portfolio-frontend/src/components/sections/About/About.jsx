
import AboutCard from "./AboutCard";
import "../../../css/about.css";

const cards = [
  {
    title: "Projects",
    value: "10+",
  },
  {
    title: "Technologies",
    value: "15+",
  },
  {
    title: "Learning",
    value: "Daily",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-left">
          <span className="section-tag">About Me</span>

          <h2>
            Passionate MERN Developer
          </h2>

          <p>
            I'm Yash, a Full Stack MERN Developer who enjoys building
            responsive, modern and user-friendly web applications.
            I love creating clean UI, smooth animations and scalable backend systems.
          </p>
        </div>

        <div className="about-right">
          {cards.map((card) => (
            <AboutCard
              key={card.title}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;