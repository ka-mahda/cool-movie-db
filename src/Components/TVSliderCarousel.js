import React from "react";
import TVCardDesign from "./TVCardDesign";
import useFetch from "../API/FetchUrl";
import { CircularProgress, Alert } from "@mui/material";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import MovieSliderCarouselStyle from "../Styles/MovieSliderCarouselStyle";



SwiperCore.use([Navigation, Pagination]);

export default function TVSliderCarousel(props) {
//   Fetching Data
  const { data, loading, hasError } = useFetch(props.url);
  let availibilityDataRecieved = !loading && !hasError && !!data;

  if (loading) return <CircularProgress />;
  if (hasError) return <Alert severity="error">{hasError}</Alert>;

  return (
    <MovieSliderCarouselStyle>
      <h3 className="titleSlider">{props.title}</h3>
      <section className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={0}
          loop={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          className="mySwiper"
        >
          {availibilityDataRecieved &&
            data.results.map((tv) => {
              return (
                <>
                  <SwiperSlide key={tv.id} className="swiperSlide">
  
                {" "}
                <TVCardDesign
                  title={tv.title}
                  year={tv.first_air_date.slice(0, 4)}
                  overview={tv.overview}
                  rating={tv.vote_average}
                  poster={tv.poster_path}
                  genre={tv.genre_ids[0]}
                  id={tv.id}
                  
                  group="tv"
                /> 
              </SwiperSlide>
                </>
              );
            })}
       
        </Swiper>
      </section>
    </MovieSliderCarouselStyle>
  );
}




