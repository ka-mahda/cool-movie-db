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
      <MovieSliderCarousel url={popularMovie} title="Popular Movies " />
      <TVSliderCarousel url={popularTV} title="Popular TVs " />
      <MovieSliderCarousel url={nowPlayingMovie} title="Latest Movies " />
      <TVSliderCarousel url={onAirTV} title="On Air TVs " />
      <MovieSliderCarousel url={topRatedMovie} title="Top Rated Movies " />
      <TVSliderCarousel url={topRatedTV} title="Top Rated TVs " />
    </>
  );
}
