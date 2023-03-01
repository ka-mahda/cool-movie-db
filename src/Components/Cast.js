import useFetch from "../API/FetchUrl";
import "../Styles/CastStyle.css";
import React from "react";
import { apiKey,baseApiUrl,generalProfilePath } from "../API/Constant";
import { Link } from "react-router-dom";
import { CircularProgress, Alert } from "@mui/material";

export default function Cast(props) {
  let url = `${baseApiUrl}/${props.category}/${props.id}/credits?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
console.log(url)
  return (
    availibilityDataRecieved &&
    data.cast.slice(0, 6).map((actor) => {
      return (
        <Link to={`/person/${actor.id}`} key={actor.id}>
          <div className="castContainer">
            <img
              src={
                actor.profile_path
                  ? generalProfilePath + actor.profile_path
                  : ""
              }
              style={{ maxHeight: "150px", width: "auto" }}
              alt="actors profile"
            />
            <div className="castDescription">
              <div className="castName">{actor.name}</div>
              <div className="castRole">{actor.character}</div>
            </div>
          </div>
        </Link>
      );
    })
  );
}
