import "./Tech.scss";
import bg from "./../../assets/resume/bg4.svg";

import { FaReact, FaNodeJs, FaJava, FaSass, FaHtml5 } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiRabbitmq,
} from "react-icons/si";

const Tech = () => {
  return (
    <section className="tech-wrapper" id="tech">
      <img className="bg-img" src={bg} />
      <div className="tech">
        <div className="horizontal-line"></div>
        <h2 className="heading">Technologies</h2>
        <div className="tech-info">
          <p>
            I have created projects with various technologies in the web
            development world.
          </p>
          <div className="tech-box">
            <div className="">
              <div className="icon">
                <FaReact />
              </div>
              <div className="title">React.js</div>
              <div className="des">Created various projects with React.js</div>
            </div>
            <div className="">
              <div className="icon">
                <SiRedux />
              </div>
              <div className="title">Redux-Toolkit</div>
              <div className="des">
                Used for state management in React projects
              </div>
            </div>
            <div className="">
              <div className="icon">
                <FaNodeJs />
              </div>
              <div className="title">Node.js</div>
              <div className="des">
                Created Full stack projects with Node.js
              </div>
            </div>
            <div className="">
              <div className="icon">
                <SiExpress />
              </div>
              <div className="title">Express.js</div>
              <div className="des">Created API's with Express.js</div>
            </div>
            <div className="">
              <div className="icon">
                <DiMongodb />
              </div>
              <div className="title">MongoDB</div>
              <div className="des">
                Created Full stack projects with Mongo Database
              </div>
            </div>
            <div className="">
              <div className="icon">
                <FaJava />
              </div>
              <div className="title">Java</div>
              <div className="des">Solved DSA questions with Java</div>
            </div>
            <div className="">
              <div className="icon">
                <SiJavascript />
              </div>
              <div className="title">Javascript</div>
              <div className="des">Various projects with Javascript</div>
            </div>
            <div className="">
              <div className="icon">
                <FaSass />
              </div>
              <div className="title">Sass</div>
              <div className="des">
                Makes css write faster with advance features
              </div>
            </div>
            <div className="">
              <div className="icon">
                <SiTailwindcss />
              </div>
              <div className="title">Tailwind</div>
              <div className="des">Css framework used in projects</div>
            </div>
            <div className="">
              <div className="icon">
                <FaHtml5 />
              </div>
              <div className="title">HTML</div>
              <div className="des">HTML5 symentic tags used in projects</div>
            </div>
            <div className="">
              <div className="icon">
                <BsGit />
              </div>
              <div className="title">Git</div>
              <div className="des">
                Git and Github to store project remotely
              </div>
            </div>
            <div className="">
              <div className="icon">
                <SiRabbitmq />
              </div>
              <div className="title">RabbitMq</div>
              <div className="des">
                Hopping messages across systems with speed and precision
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
