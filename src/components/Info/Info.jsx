import profileImg from "../../assets/matt-colen-small.png";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import "./Info.css";

export default function Info() {
  return (
    <section id="info" className="info">
      <img
        className="profile-img"
        src={profileImg}
        alt="Profile of Matt Colen Smiling"
      />
      <div className="container">
        <h1 className="name">Matt Colen</h1>
        <p className="field">Frontend Developer</p>
        <a
          className="website"
          target="_blank"
          href="https://matt-colen.netlify.app"
        >
          matt-colen.netlify.app
        </a>
        <div className="btns">
          <a className="btn btn--primary" href="mailto: mzcolen@gmail.com">
            <img src={mail} />
            Email
          </a>
          <a
            className="btn btn--secondary"
            target="_blank"
            href="https://www.linkedin.com/in/matthew-colen-061650209/"
          >
            <img src={linkedin} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
