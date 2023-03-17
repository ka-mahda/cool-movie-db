import React from "react";
import "../Styles/Hero.css";
import useFetch from "../API/FetchUrl";
import { trendingMovie, generalPosterPath } from "../API/Constant";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { CircularProgress, Alert } from "@mui/material";
import Search from "./Search";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

export default function Hero(props) {
  const { data, loading, hasError } = useFetch(trendingMovie);
  let availibilityDataRecieved = !loading && !hasError && !!data;
  if (loading) return <CircularProgress />;
  if (hasError) return <Alert severity="hasError">{hasError}</Alert>;

  
  return (
    <div className="hero">
      <div className="description">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <h1>
            Thousands of Titles
            <br />
            <span> in One Place</span>
          </h1>
          <span className="siteMission">
            Find amazing and trending movies and TV shows for free. Thousands of
            hours of videos from everywhere and from all genres can be found at
            <span>
              <em> COOL MOVIE! </em>
            </span><br/>
            Go ahead and find what you want.
          </span>

          <Search />
        </div>
      </div>
      <div className="trending">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {availibilityDataRecieved &&
            data.results.map((movie) => {
              let src = generalPosterPath + movie.poster_path;
              return (

                <SwiperSlide key={movie.id} className="swiperSlide">
                   <Link to={`/movie/${movie.id}`}>
                   <img height="600px" src={src} id={movie.id} />
                   </Link>
                  
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
     
    </div>
  );
}
