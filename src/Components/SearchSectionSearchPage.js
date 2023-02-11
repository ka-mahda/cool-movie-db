import React from "react";
import first from "../Assets/ImgSite/1.png";
import second from "../Assets/ImgSite/2.png";
import third from "../Assets/ImgSite/3.png";
import fourth from "../Assets/ImgSite/4.png";
import fifth from "../Assets/ImgSite/5.png";
import sixth from "../Assets/ImgSite/6.png";
import seventh from "../Assets/ImgSite/7.png";
import eighth from "../Assets/ImgSite/8.png";
import Search from "./Search";
import "../Styles/SearchSectionSearchPageStyle.css";

export default function SearchSection() {
  

  return (
    <section className="searchContainer">
      <div className="leftSideSearchContainer">
        <img src={first} width="52px" height="52px" alt="" />
        <img src={second} width="52px" height="52px" alt="" />
        <img src={third} width="52px" height="52px" alt="" />
        <img src={fourth} width="52px" height="52px" alt="" />
      </div>
      <div className="middleSearchContainer">
        <h2>
          Everything you need to know and find about movies is in{" "}
          <span><br/>
            <em>COOL MOVIE!</em>
            <br />
          </span>{" "}
          Let's go to find it.
        </h2>
        <div className="searchSectionComponent"><Search/></div>
        
      </div>
      <div className="rightSideSearchContainer">
        <img src={fifth} width="52px" height="52px" alt="" />
        <img src={sixth} width="52px" height="52px" alt="" />
        <img src={seventh} width="52px" height="52px" alt="" />
        <img src={eighth} width="52px" height="52px" alt="" />
      </div>
    </section>
  );
}
