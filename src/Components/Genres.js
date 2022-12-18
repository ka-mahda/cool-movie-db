import React from "react";
import useFetch from "../API/FetchUrl";
import {GenresMovie} from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";

export default function Genre(props) {
  
  const {data, loading, hasError} = useFetch(GenresMovie);

  if (loading) return <CircularProgress />;
  if (hasError) return <Alert severity="hasError">{hasError}</Alert>;

  return (
        data.genres.map((genre) => {
          if (genre.id === props.id) {
            return (
              "{genre.name}"

            );
          }
        })
    
  )
}

