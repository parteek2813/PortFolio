import "./About.scss";

const About = () => {
  return (
    <section className="about-wrapper" id="about">
      <div className="about">
        <div className="horizontal-line"></div>
        <h2 className="heading">About Me</h2>
        <div className="about-me">
          My name is{" "}
          <strong
            style={{
              color: "#fffffff5",
            }}
          >
            Parteek Kumar
          </strong>{" "}
          and I'm from Haryana, India. Excited to learn new tech and implement
          them in my projects
        </div>
        <div className="career-path">
          <div>
            <div>
              <span>2020</span>
              <span className="line-style"></span>
            </div>
            <div>Completed 12th in Science from Satyanand School, Gohana</div>
          </div>
          <div>
            <div>
              <span>2020</span>
              <span className="line-style"></span>
            </div>
            <div>
              Started B.E in Info. Tech from Panjab Univershity, Hoshiarpur
            </div>
          </div>
          <div>
            <div>
              <span>2022</span>
              <span className="line-style"></span>
            </div>
            <div>Started Web development and fell in love with it</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
