import React from "react";
import useFetch from "../API/FetchUrl";
import TVCardDesign from "./TVCardDesign";
import { apiKey, baseApiUrl } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";

export default function TVRecommendations(props) {
  let url = `${baseApiUrl}/${props.category}/${props.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    availibilityDataRecieved &&
    data.results.slice(0, 5).map((tv) => {
      return (
        <TVCardDesign
          title={tv.title || tv.name}
          year={new Date(tv.first_air_date).getFullYear().toString()}
          overview={tv.overview}
          rating={Math.floor(tv.vote_average * 10)}
          poster={tv.poster_path}
          genreOne={tv.genre_ids[0]}
          genreTwo={tv.genre_ids[1]}
          id={tv.id}
          category={props.link}
          group={props.category}
          key={tv.id}
        />
      );
    })
  );
}
