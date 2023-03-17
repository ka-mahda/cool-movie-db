import React from "react";
import logoB from "../Assets/LogoSite/3P.png";
import github from "../Assets/svg/icons8-github-squared.svg";
import telegram from "../Assets/svg/icons8-telegram-app.svg";
import gmail from "../Assets/svg/icons8-mail.svg";
import FooterStyle from "../Styles/FooterStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../Styles/ModalAbout.css";
import ModalAbout from "./ModalAbout";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "#45a29e",
  boxShadow: 24,
  p: 4,
};


export default function Footer() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <FooterStyle>
      <div className="leftSideFooter">
        <h3>COOLMOVIE</h3>
        <Button onClick={handleOpen}>About Us</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
           <ModalAbout/>
          </Box>
        </Modal>
        <a  target={"_blank"} href="https://developers.themoviedb.org/3/getting-started/introduction">
          {" "}
          OUR API
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
