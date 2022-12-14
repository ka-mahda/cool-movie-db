// my api key
const apiKey = "611a68ca1ffe82894a9aca2a12db97f8";

// base urls
const baseApiUrl = "https://api.themoviedb.org/3";

// urls movie
const popularMovie = `${baseApiUrl}/movie/popular?api_key=${apiKey}&language=en-US`;
const upcomingMovie = `${baseApiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US`;
const topRatedMovie=`${baseApiUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`;
const nowPlayingMovie=`${baseApiUrl}/movie/now_playing?api_key=${apiKey}&language=en-US`;
const genresMovie = `${baseApiUrl}/genre/movie/list?api_key=${apiKey}`;
const latestMovie=`${baseApiUrl}/movie/latest?api_key=${apiKey}&language=en-US`;

// urls tv
const popularTV = `${baseApiUrl}/tv/popular?api_key=${apiKey}&language=en-US`;
const onAirTV=`${baseApiUrl}/tv/on_the_air?api_key=${apiKey}&language=en-US`;
const latestTV = `${baseApiUrl}/tv/latest?api_key=${apiKey}&language=en-US`;
const genresTV = `${baseApiUrl}/genre/tv/list?api_key=${apiKey}`;
const topRatedTV=`${baseApiUrl}/tv/top_rated?api_key=${apiKey}&language=en-US`;



// urls general

const generalPosterPath = "http://image.tmdb.org/t/p/w342";
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
  genresMovie,
  latestMovie,
  popularTV,
  upcomingMovie,
  onAirTV,
  latestTV,
  genresTV,
  topRatedTV,
  generalPosterPath,
  generalProfilePath,
  generalBdPath,
  generalLogoPath,
  generalStillPath,
};
