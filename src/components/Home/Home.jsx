import { useState } from "react";
import bg from "./../../assets/resume/bg2.svg";
import resume from "./../../assets/resume/Parteek-Kumar-Resume-1.pdf";
import "./Home.scss";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  window.onscroll = () => {
    // If window is scrolled , setisAttop hook value as false and vice verssa
    window.scrollY > 50 ? setIsAtTop(false) : setIsAtTop(true);
  };

  return (
    <div className="home-wrapper">
      <img className="bg-img" src={bg} />
      <div className="home">
        <div className="info">
          <div>Hello I'm</div>
          <h1>PARTEEK KUMAR</h1>
          <div>
            Creative Full Stack Developer having Passionate to build things from
            scratch.
          </div>
          <a className="explore-more" download href={resume}>
            Download Resume
          </a>
        </div>

        {!isAtTop && (
          // if we are not at the top, then created a link to go to top
          <a href="#" className="go-to-top">
            Go to Top
          </a>
        )}

        {!isAtTop && (
          <div className="sticky-socials">
            <a href="https://github.com/parteek2813" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parteek-kumar-68881b15a/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/its__prateek28/" target="_blank">
              <AiFillInstagram />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
