import React, { useContext } from "react";
import HeaderStyle from "../Styles/HeaderStyle";
import logo from "../Assets/LogoSite/logo.png";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ThemeContext } from "../Theme";
import VerticalTabs from "./AdvancedSearch";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [open, setOpen] = React.useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <HeaderStyle>
      <div className="leftSideHeader">
        <Button
          onClick={handleOpen}
          sx={{
            ["& .css-zve3e9-MuiButtonBase-root-MuiButton-root"]: {
              transition:
                "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
            },
          }}
        >
          <WidgetsRoundedIcon
            sx={{ width: "42px", height: "42px", color: "var(--text-color)" }}
          />
        </Button>

        <Drawer anchor={"top"} open={open} onClose={handleClose}>
          <VerticalTabs />
        </Drawer>

        <div className="header-toggle-buttons">
          <button onClick={() => toggleTheme()}>{theme}</button>
        </div>
      </div>
      <div className="rightSideHeader">
        <a href="/">
          <img src={logo} height="72px" alt="logo" />
        </a>
      </div>
    </HeaderStyle>
  );
}

// import * as React from "react";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// export default function TemporaryDrawer() {
//     const [open, setOpen] = React.useState(false);

//     function handleOpen() {
//         setOpen(!open);
//     }

//     function handleClose() {
//         setOpen(false);
//     }

//     return (
//         <>
//             <Button onClick={handleOpen}
//                 variant="outlined" color="success">
//                 Toggle Drawer
//             </Button>
//             <Drawer anchor={"left"} open={open}
//                 onClose={handleClose}>
//                 <MenuItem>Geek</MenuItem>
//                 <MenuItem>Geeks</MenuItem>
//                 <MenuItem>GeeksForGeeks</MenuItem>
//             </Drawer>
//         </>
//     );
// }
