import "../../../css/skills.css";
import SkillCard from "./SkillCard";
import skills from "./skillsData";
import useScrollReveal from "../../../hooks/useScrollReveal";

const Skills = () => {
  const sectionRef = useScrollReveal(".section-tag, .skills h2, .skill-card");

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">

        <span className="section-tag">
          My Skills
        </span>

        <h2>Tech Stack</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;