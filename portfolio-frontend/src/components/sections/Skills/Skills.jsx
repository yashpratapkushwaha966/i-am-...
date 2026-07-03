import "../../../css/skills.css";
import SkillCard from "./SkillCard";
import skills from "./skillsData";
import useScrollReveal from "../../../hooks/useScrollReveal";

const Skills = () => {
  const sectionRef = useScrollReveal(".section-tag, .skills h2, .skill-row");

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">

        <span className="section-tag">My Skills</span>

        <h2>Tech Stack</h2>

        <div className="skills-list">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.title}
              index={i + 1}
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
