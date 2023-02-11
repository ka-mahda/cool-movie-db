import React from "react";
import CardStyle from "../Styles/CardStyle";
import { generalPosterPath } from "../API/Constant";
import Genre from "./Genres";
import { CircularProgress } from "@mui/material";

export default function MovieCardDesign(props) {
  return (
    <CardStyle>
      <div className="posterNameMovie">
        <img
          src={props.poster ? generalPosterPath + props.poster : "noPoster"}
          alt="Movie Poster"
        />

        <h4>
          {" "}
          {props.title} ({props.year})
        </h4>
      </div>

      <div className="overview">
        <p>{props.overview}</p>

        <div className="rating">
          <CircularProgress value={props.rating} text={props.rating + "/10"} />
          <div className="genres">
          <Genre id={props.genreOne} group={props.group} />
          <Genre id={props.genreTwo} group={props.group} />
        </div>
        </div>
       
      </div>
    </CardStyle>
  );
}
