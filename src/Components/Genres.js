import React from "react";
import useFetch from "../API/FetchUrl";
import {apiKey, baseApiUrl} from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";

export default function Genre(props) {
  let url = `${baseApiUrl}/genre/${props.group}/list?api_key=${apiKey}`;
  const {data, loading, hasError} = useFetch(url);
  let availibilityDataRecieved = !loading && !hasError && !!data;

  if (loading) return <CircularProgress />;
  if (hasError) return <Alert severity="hasError">{hasError}</Alert>;

  return (
    <>
    {availibilityDataRecieved &&
      data.genres.map((genre) => {
        if (genre.id === props.id) {
          return (
            <Link
              to={`/${props.group === "movie" ? "movie" : "tv"}/genre=${
                genre.id
              }`}
              key={genre.id}
            >
              {genre.name}
            </Link>
          );
        }
      })}
  </>
    
  )
}
