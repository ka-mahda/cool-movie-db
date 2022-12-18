import React from "react";
import first from "../Assets/ImgSite/1.png";
import second from "../Assets/ImgSite/2.png";
import third from "../Assets/ImgSite/3.png";
import fourth from "../Assets/ImgSite/4.png";
import fifth from "../Assets/ImgSite/5.png";
import sixth from "../Assets/ImgSite/6.png";
import seventh from "../Assets/ImgSite/7.png";
import eighth from "../Assets/ImgSite/8.png";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchStyle.css";
import { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";


export default function Search() {
  let [result, setResult] = useState("");
  // const navigate = useNavigate();

  return (
    <section className="searchSection">
      <div className="leftSideSearch">
        <img src={first} width="52px" height="52px" alt="" />
        <img src={second} width="52px" height="52px" alt="" />
        <img src={third} width="52px" height="52px" alt="" />
        <img src={fourth} width="52px" height="52px" alt="" />
      </div>
      <div className="middleSearch">
        <h2>
          Everything you need to know and find about movies is in{" "}
          <span>
            <em>COOL MOVIE!</em>
          </span>{" "}
          Let's go to find it.
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setResult(e.target.value);
            // navigate(`/search/${result}`);
          }}
        >
          <div className="searchBox">
          <SearchIcon sx={{ color: "#66fcf1",fontSize: "2.5rem" }} />
          <input
            type={"text"}
            placeholder="tell me what are you looking for..."
            id="search"
            onChange={(e) => {
              setResult(e.target.value);
            }}
            value={result}
          ></input></div>
        </form>
        {/* <Link to={`/search/${result}`}> */}
        <Button variant="outlined"> Let's See What I Find!</Button>
        {/* </Link> */}
      </div>
      <div className="rightSideSearch">
        <img src={fifth} width="52px" height="52px" alt="" />
        <img src={sixth} width="52px" height="52px" alt="" />
        <img src={seventh} width="52px" height="52px" alt="" />
        <img src={eighth} width="52px" height="52px" alt="" />
      </div>
    </section>
  );
}
