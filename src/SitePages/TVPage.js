import "../Styles/MoviePageStyle.css";
import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl, generalBdPath } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import useFetch from "../API/FetchUrl";
import Genre from "../Components/Genres";
import TVDetail from "../Components/TVDetail";

export default function DetailTVPage() {
  let param = useParams();
  let url = `${baseApiUrl}/tv/${param.id}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  function convertTimeToHourAndMinute(n) {
    var hours = n / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours} hour(s) and ${rminutes} minute(s)`;
  }
  return (
    availibilityDataRecieved && (
      <>
        <section className="backdropSection">
          <div className="gradientLayer">
            <div>
              <h2>
                {" "}
                {data.name} (
                    {new Date(data.first_air_date)
                        .getFullYear()
                        .toString()})
              </h2>

              <div className="genres">
                {data.genres.map((genre) => (
                  <Genre id={genre.id} group="tv" key={genre.id} />
                ))}
              </div>
            </div>
            <div>
              <div className="tagline">"{data.tagline}"</div>
              <div className="overview">
                <h3>Overview:</h3>
                {data.overview}
              </div>
            </div>

            <div className="timeAndScore">
              <div className="runtime">
                <QueryBuilderIcon />
                <strong>Duration</strong>:{" "}
                {convertTimeToHourAndMinute(data.episode_run_time)}
              </div>
              <div className="score">
                <ThumbUpOffAltIcon />
                <strong>User Score</strong>: {Math.floor(data.vote_average)}/10
              </div>
            </div>
          </div>
          <img
            src={data.backdrop_path ? generalBdPath + data.backdrop_path : ""}
            className="backdrop"
          />
        </section>
        <section className="details">
          <TVDetail/>
        </section>
      </>
    )
  );
}
