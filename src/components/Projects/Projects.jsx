import "./Projects.scss";
import { projects } from "../../config";
import ProjectCard from "../ProjectCard/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import bg from "./../../assets/resume/bg3.svg";

const Projects = () => {
  return (
    <section className="projects-wrapper" id="projects">
      <img className="bg-img" src={bg} />
      <div className="project">
        <div className="horizontal-line"></div>
        <h2 className="heading">Projects</h2>
        <div className="project-list">
          {/* First took the json-project-data from the config file 
        and then created a map out of that data and pass the each array 
        seprately as data to the Project card which will render then
         */}
          {projects.map((project) => (
            <ProjectCard key={uuidv4()} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
