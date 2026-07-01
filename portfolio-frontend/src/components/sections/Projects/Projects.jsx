import "../../../css/projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

const Projects = () => {
  return (
    <section className="projects" id="projects">
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