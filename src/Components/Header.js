import React, {useContext} from "react";
import HeaderStyle from "../Styles/HeaderStyle";
import logo from "../Assets/LogoSite/logo.png";
// import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { ThemeContext } from "../Theme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderStyle>
      <div className="leftSideHeader">
        <a href="/">
          <img src={logo} height="72px" alt="logo" />
        </a>
      </div>
      <div className="rightSideHeader">
        <div className="header-toggle-buttons">
          <button onClick={() => toggleTheme()}>{theme}</button>
        </div>
        <div className="assortment">
          <WidgetsRoundedIcon
            sx={{ width: "42px", height: "42px", color:"var(--text-color)" }}
          />
          <div className="assortmentList active"></div>
        </div>
      </div>
    </HeaderStyle>
  );
}
