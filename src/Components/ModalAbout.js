import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../Styles/ModalAbout.css";

export default function ModalAbout() {
  return (
            <div className="modalSection">
              <section className="titleOfModalAbout">
                <h2>When you are here, you are in your home.</h2>
                <h4> (And so is all your entertainment.)</h4>
              </section>
              <section className="ourMission">
                <h3>
                  We are faning at heart Of movies, shows, and well, all things
                  entertainment. So much so that we built an app that brings it
                  all together.
                </h3>
                <p>
                  As beautiful as it is easy-to-use, coolmovie gives fans
                  everywhere a way to discover, save, and enjoy the
                  entertainment they love the most.
                </p>
                <p>
                  We are on a mission to create a community where everyone can
                  discover and experience all the movie entertainment that
                  matters to them.
                </p>
              </section>
              <section className="ourTeam">
                <h4>Meet our starting lineup:</h4>
                <div className="teamCard">
                  <h4>Mahda Kazemi</h4>
                  <h5>Developer</h5>
                </div>
                <div className="teamCard">
                  <h4>Mojtaba Esparipour</h4>
                  <h5>teacher</h5>
                </div>
              </section>
              <section className="lastSentence">
                It's not just what we do, it's about how we do it!!!
              </section>
            </div>
      
    
  );
}
