import React from "react";
import HeaderStyle from "../Styles/HeaderStyle";
import logo from "../Assets/LogoSite/logo.png";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

export default function Header() {
  return (
    <HeaderStyle>
      <div className="leftSideHeader">
        <a href="/">
          <img src={logo} height="72px" alt="logo" />
        </a>
      </div>
      <div className="rightSideHeader">
        <div className="paletteMode">
          <ColorLensOutlinedIcon
            sx={{ width: "42px", height: "42px", color: "#66fcf1" }}
          />

          <select name="themeSelect" id="themeSelect">
            <option value="cool">cool</option>
            <option value="snow">snow</option>
            <option value="sleek">sleek</option>
          </select>
        </div>
        <div className="assortment">
          <WidgetsRoundedIcon
            sx={{ width: "42px", height: "42px", color: "#66fcf1" }}
          />
          <div className="assortmentList active"></div>
        </div>
      </div>
    </HeaderStyle>
  );
}
