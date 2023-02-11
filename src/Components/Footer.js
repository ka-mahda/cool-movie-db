import React from "react";
import HeaderStyle from "../Styles/HeaderStyle";
// import { Link } from "react-router-dom";
import logoB from "../Assets/LogoSite/3P.png";
import logoShort from "../Assets/LogoSite/4P.png";
import github from "../Assets/svg/icons8-github-squared.svg";
import telegram from "../Assets/svg/icons8-telegram-app.svg";
import gmail from "../Assets/svg/icons8-mail.svg";
import tmdb from "../Assets/tmdbLogo/tmdbLogo.svg";

import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
// import { Link } from "react-router-dom";
import FooterStyle from "../Styles/FooterStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="leftSideFooter">
        <h3>COOLMOVIE</h3>

        <a href="https://www.themoviedb.org/">
          {" "}
          {/* <img src={tmdb} width="64px" alt="logoTMDB" /> */}
          Our API
        </a><br/>
        <a href="/">About Us</a><br/>
        <a href="/">Contact Us</a>
        
      </div>
      <div className="rightSideFooter">
        <a href="/">
          <img src={logoB} width="150px" alt="logo" />
        </a>
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
