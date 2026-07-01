import "../../../css/experience.css";
import experience from "./experienceData";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <span className="section-tag">
          Journey
        </span>

        <h2>My Experience</h2>

        <div className="timeline">

          {experience.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;