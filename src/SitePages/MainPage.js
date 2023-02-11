import React from "react";
import MovieSliderCarousel from "../Components/MovieSliderCarousel";
import TVSliderCarousel from "../Components/TVSliderCarousel";
import Hero from "../Components/HeroTrending";

import {
  popularMovie,
  popularTV,
  onAirTV,
  nowPlayingMovie,
  topRatedMovie,
  topRatedTV,
} from "../API/Constant";

export default function Mainpage() {
  return (
    <>
      <Hero />
      <MovieSliderCarousel url={popularMovie} title="popular Movies " />
      <TVSliderCarousel url={popularTV} title="popular tv " />
      <MovieSliderCarousel url={nowPlayingMovie} title="latest Movies " />
      <TVSliderCarousel url={onAirTV} title="on Air TV " />
      <MovieSliderCarousel url={topRatedMovie} title="toprated Movies " />
      <TVSliderCarousel url={topRatedTV} title="top rated tv " />
    </>
  );
}
