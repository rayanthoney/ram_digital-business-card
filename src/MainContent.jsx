import React from "react";
import "./MainContent.css";
import github from "./assets/github.svg";
import twitter from "./assets/twitter.svg";
import website from "./assets/website.svg";
import instagram from "./assets/instagram.svg";
import me from "./assets/me-1.png";

export default function MainContent() {
  return (
    <>
      <div className="container">
        <div className="img-container">
{/*           <img src={me} alt="" className="main-img" /> */}
        </div>
        <div className="sub-container">
          <h2 className="name">Ray Anthoney</h2>
          <h4 className="role">Software Engineer</h4>
          <h5 className="web">rayanthoney.com</h5>
          <div className="connect">
            <a href="mailto:ray@rayanthoney.com" className="mail">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rayanthoney"
              className="linkedin" target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>
              I am a Software Engineer and Freelancer focused on full stack web
              development. I build beautiful and meaningful web experiences via
              clean and accessible code.
            </p>
          </div>
          <div className="interest">
            <h3>Interest</h3>
            <p>
              Finance, Music, Cars, Health and all things Technology. I enjoy
              connecting with people and learning new things. Give me a shout at
              ray@rayanthoney.com
            </p>
          </div>
        </div>
        <div className="footer">
          <a href="https://twitter.com/rayanthoney" target="_blank"><img className="twitter" src={twitter} alt="twitter" /></a>
          <a href="https://github.com/rayanthoney" target="_blank"><img className="github" src={github} alt="Github" /></a>
          <a href="https://www.instagram.com/rayanthoney" target="_blank"><img className="instagram" src={instagram} alt="Instagram" /></a>
          <a href="https://ray@rayanthoney.com" target="_blank"><img className="website" src={website} alt="Website" /></a>
        </div>
      </div>
    </>
  );
}
