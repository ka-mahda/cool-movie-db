// my api key
const apiKey = "611a68ca1ffe82894a9aca2a12db97f8";

// base urls
const baseApiUrl = "https://api.themoviedb.org/3";

// urls movie
const popularMovie = `${baseApiUrl}/movie/popular?api_key=${apiKey}&language=en-US`;
const upcomingMovie = `${baseApiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US`;
const topRatedMovie=`${baseApiUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`;
const nowPlayingMovie=`${baseApiUrl}/movie/now_playing?api_key=${apiKey}&language=en-US`;
const latestMovie=`${baseApiUrl}/movie/latest?api_key=${apiKey}&language=en-US`;
const trendingMovie=`${baseApiUrl}/trending/all/week?api_key=${apiKey}`;

// urls tv
const popularTV = `${baseApiUrl}/tv/popular?api_key=${apiKey}&language=en-US`;
const onAirTV=`${baseApiUrl}/tv/on_the_air?api_key=${apiKey}&language=en-US`;
const latestTV = `${baseApiUrl}/tv/latest?api_key=${apiKey}&language=en-US`;
const topRatedTV=`${baseApiUrl}/tv/top_rated?api_key=${apiKey}&language=en-US`;



// urls general

const generalPosterPath = "http://image.tmdb.org/t/p/w400";
const generalProfilePath = "http://image.tmdb.org/t/p/w185";
const generalBdPath = "http://image.tmdb.org/t/p/original";
const generalLogoPath = "https://image.tmdb.org/t/p/w45";
const generalStillPath = "http://image.tmdb.org/t/p/w300";



export {
  apiKey,
  baseApiUrl,
  popularMovie,
  topRatedMovie,
  nowPlayingMovie,
  latestMovie,
  trendingMovie,
  popularTV,
  upcomingMovie,
  onAirTV,
  latestTV,
  topRatedTV,
  generalPosterPath,
  generalProfilePath,
  generalBdPath,
  generalLogoPath,
  generalStillPath,
};
