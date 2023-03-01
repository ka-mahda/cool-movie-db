import useFetch from "../API/FetchUrl";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl } from "../API/Constant";
import MovieCardDesign from "./MovieCardDesign";
import React from "react";
import { CircularProgress, Alert } from "@mui/material";

export default function ActorFilmography() {
  let { id } = useParams();
  let url = `${baseApiUrl}/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    availibilityDataRecieved &&
    data.cast.slice(0, 10).map((movie) => {
      return (
        <MovieCardDesign
          title={movie.title || movie.name}
          year={new Date(movie.first_air_date || movie.release_date)
            .getFullYear()
            .toString()}
          overview={movie.overview}
          rating={movie.vote_average}
          poster={movie.poster_path}
          genreOne={movie.genre_ids[0]}
          genreTwo={movie.genre_ids[1]}
          id={movie.id}
          category="movie"
          group={"movie" && "tv"}
          key={movie.id}
        />
      );
    })
  );
}
