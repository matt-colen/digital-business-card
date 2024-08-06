import profileImg from "../../assets/matt-colen-small.png";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import "./Info.css";

export default function Info() {
  return (
    <section id="info" className="info">
      <img className="profile-img" src={profileImg} alt="Matt Colen Smiling" />
      <div className="info-content">
        <h1 className="name">Matt Colen</h1>
        <p className="field">Frontend Developer</p>
        <p className="website">matt-colen.netlify.app</p>
        <div className="btns">
          <a className="btn btn--primary" href="#">
            <img src={mail} />
            Email
          </a>
          <a className="btn btn--secondary" href="#">
            <img src={linkedin} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
