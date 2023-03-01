import React from "react";
import logoB from "../Assets/LogoSite/3P.png";
import github from "../Assets/svg/icons8-github-squared.svg";
import telegram from "../Assets/svg/icons8-telegram-app.svg";
import gmail from "../Assets/svg/icons8-mail.svg";
import FooterStyle from "../Styles/FooterStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="leftSideFooter">
        <h3>COOLMOVIE</h3>
        <a href="/">Contact Us</a>
        <br />
        <a href="/">About Us</a>
        <br />

        <a href="https://www.themoviedb.org/">
          {" "}
          Our API
        </a>
      </div>
      <div className="center">
        <a href="/">
          <img src={logoB} width="200px" alt="logo" />
        </a>
      </div>
      <div className="rightSideFooter">
        <div className="developerInfo">
          <div className="devName">
            <p>Designer & Developer:</p>
            <p className="nameDeveloper"> Mahda Kazemi</p>
          </div>

          <div className="links">
            <a href="https://github.com/ka-mahda">
              <img src={github} width="48px" height="48px" alt="github" />
            </a>
            <a href="https://telegram.me/KaMahda">
              <img src={telegram} width="48px" height="48px" alt="telegram" />
            </a>
            <a href="mailto:mahdakazemi1996@gmail.com">
              <img src={gmail} width="48px" height="48px" alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
