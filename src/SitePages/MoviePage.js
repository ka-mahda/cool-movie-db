import "../Styles/MoviePageStyle.css";
import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl, generalBdPath } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import useFetch from "../API/FetchUrl";
import Genre from "../Components/Genres";
import TrailerModal from "../Components/Trailer";
import MovieDetail from "../Components/MovieDetail";

export default function DetailMoviePage() {
  let param = useParams();
  let url = `${baseApiUrl}/movie/${param.id}?api_key=${apiKey}&language=en-US`;
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
                {data.title} (
                {new Date(data.release_date).getFullYear().toString()})
              </h2>

              <div className="genres">
                {data.genres.map((genre) => (
                  <Genre id={genre.id} group="movie" key={genre.id} />
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
                {convertTimeToHourAndMinute(data.runtime)}
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
          <MovieDetail/>
        </section>
      </>
    )
  );
}

// <section data-v-71cd868e="" class="background">
//   <main data-v-71cd868e="" class="main-content-single">
//     <div data-v-71cd868e="" class="gradient"></div>
//     <img
//       data-v-71cd868e=""
//       src="https://cdn.30nama.com/cover/30155636_30NAMA.webp?1675922980"
//       class="img loaded"
//     />
//   </main>
//   <div data-v-71cd868e="" class="fav"></div>
// </section>
