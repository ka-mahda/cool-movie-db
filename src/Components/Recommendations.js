import React from "react";
import useFetch from "../API/FetchUrl";
import MovieCardDesign from "./MovieCardDesign";
import { apiKey,baseApiUrl } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";

export default function Recommendations(props) {
  let url = `${baseApiUrl}/${props.category}/${props.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    availibilityDataRecieved &&
    data.results.slice(0, 5).map((movie) => {
      return (
        <MovieCardDesign
          title={movie.title || movie.name}
          year={new Date(movie.release_date).getFullYear().toString()}
          overview={movie.overview}
          rating={movie.vote_average}
          poster={movie.poster_path}
          genreOne={movie.genre_ids[0]}
          genreTwo={movie.genre_ids[1]}
          id={movie.id}
          category={props.link}
          group={props.category}
          key={movie.id}
        />
      );
    })
  );
}
