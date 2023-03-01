import React from "react";
import CardStyle from "../Styles/CardStyle";
import { generalPosterPath } from "../API/Constant";
 import Genre from "./Genres";
 import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function TVCardDesign(props) {
  return (
    <CardStyle>
      <Link to={`/${props.category}/${props.id}`}>
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
      </Link>

      <div className="overview">
        <p>{props.overview}</p>

        <div className="rating">
        <CircularProgressbar className="circularRating" maxValue={10} minValue={0} value={props.rating} text={props.rating.toFixed(1) + "/10"} />
          <div className="genres">
          <Genre id={props.genreOne} group={props.group} />
          <Genre id={props.genreTwo} group={props.group} />
        </div>
        </div>
      </div>
    </CardStyle>
  );
}
