import "./ProjectCard.scss";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-wrapper">
      <img className="preview-img" src={project.imgUrl} alt={project.title} />
      <div className="project-info">
        <h3
          className="title"
          style={{
            WebkitTextFillColor: "transparent",
            background: project.background,
            WebkitBackgroundClip: "text",
          }}
        >
          {project.title}
        </h3>
        <div className="description">{project.description}</div>
        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span
              key={uuidv4()}
              className="tech-stack-item"
              style={{
                background: project.background,
                opacity: "0.9",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={project.sourceUrl} target="_blank">
          Source
        </a>
        <a href={project.demoUrl} target="_blank">
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
