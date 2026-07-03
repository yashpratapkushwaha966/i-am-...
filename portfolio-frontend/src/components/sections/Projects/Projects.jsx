import "../../../css/projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import useScrollReveal from "../../../hooks/useScrollReveal";

const Projects = () => {
  const sectionRef = useScrollReveal(
    ".section-tag, .projects h2, .featured-project, .project-card"
  );

  const [featured, ...rest] = projects;

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">

        <span className="section-tag">Featured Projects</span>

        <h2>My Recent Work</h2>

        {featured && (
          <a
            className="featured-project"
            href={featured.live || featured.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="featured-label">Latest build</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <div className="project-tech">
              {featured.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <span className="featured-arrow">View project →</span>
          </a>
        )}

        <div className="projects-grid">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
