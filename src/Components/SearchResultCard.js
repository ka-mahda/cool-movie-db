import React from "react";
import CardStyle from "../Styles/CardStyle";
import { generalPosterPath } from "../API/Constant";
import Genre from "./Genres";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchResultCard(props) {
  return (
    <CardStyle>
       <Link to={`/${props.title||props.name}/${props.id}`}>
      <div className="posterNameMovie">
        <img
          src={props.poster ? generalPosterPath + props.poster : "noPoster"}
          alt="Movie Poster"
        />

        <h4>
          {" "}
          {props.title}
        </h4>
      </div>
      </Link>

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
