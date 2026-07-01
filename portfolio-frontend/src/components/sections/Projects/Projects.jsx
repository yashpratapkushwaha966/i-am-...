import "../../../css/projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import useScrollReveal from "../../../hooks/useScrollReveal";

const Projects = () => {
  const sectionRef = useScrollReveal(".section-tag, .projects h2, .project-card");

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">

        <span className="section-tag">
          Featured Projects
        </span>

        <h2>My Recent Work</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;