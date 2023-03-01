import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl, generalStillPath } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import useFetch from "../API/FetchUrl";
import Trailer from "./Trailer";
import MovieDetailStyle from "../Styles/MovieDetailStyle";
import Cast from "../Components/Cast";
import TVRecommendations from "./TVRecommendation";

export default function DetailTVPage() {
  let param = useParams();
  let url = `${baseApiUrl}/tv/${param.id}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    availibilityDataRecieved && (
      <MovieDetailStyle>
        <section className="trailerSection detailBoxSection">
          <div className="titleTrailer titleOfDetails">
            <h3>
              {data.name} <strong>trailer</strong>
            </h3>
            <span className="line"></span>
          </div>
          <div className="trailerShow showingDetails">
            <div className="splitter">
              <img
                className="posterMovie"
                src={
                  data.poster_path ? generalStillPath + data.poster_path : ""
                }
                alt=""
              />{" "}
            </div>
            <div className="trailerBox">
              <Trailer id={param.id} group={"tv"} />
            </div>
          </div>
        </section>
        <section className="castSection detailBoxSection">
          <div className="titleCast titleOfDetails">
            <h3>
              {data.title} <strong>casts</strong>
            </h3>
            <span className="line"></span>
          </div>
          <div className="castShow">
            <Cast id={param.id} category="tv" />
          </div>
        </section>
        <section className="recomSection detailBoxSection">
          <div className="titleRecom titleOfDetails">
            <h3>
            <strong>recommended tvs for</strong> {data.title}
            </h3>
            <span className="line"></span>
          </div>
          <div
            className="recomShow"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <TVRecommendations id={param.id} category="tv" link="tv" />
          </div>
        </section>
      </MovieDetailStyle>
    )
  );
}
