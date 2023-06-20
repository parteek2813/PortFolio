import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="top">
          <div className="">
            <div className="label">CALL</div>
            <a href="tel:+917206143295" className="content">
              +91 7206143295
            </a>
          </div>
          <div className="">
            <div className="label">EMAIL</div>
            <a href="mailto:singhparteek160@gmail.com" className="content">
              singhparteek160@gmail.com
            </a>
          </div>
        </div>
        <div className="bottom">Innovating One project at a time.</div>
      </div>
    </div>
  );
};

export default Footer;
