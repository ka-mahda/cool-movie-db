// my api key
const apiKey = "611a68ca1ffe82894a9aca2a12db97f8";

// urls
const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const upcomingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const popularTV = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
const latesTV = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;
const Genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

// base urls
const UrlBased = "https://api.themoviedb.org/3";
const generalPosterPath = "http://image.tmdb.org/t/p/w342";
const generalProfilePath = "http://image.tmdb.org/t/p/w185";
const generalBdPath = "http://image.tmdb.org/t/p/original";
const generalLogoPath = "https://image.tmdb.org/t/p/w45";
const generalStillPath = "http://image.tmdb.org/t/p/w300";

export {
  apiKey,
  popularMovie,
  upcomingMovie,
  popularTV,
  latesTV,
  Genres,
  UrlBased,
  generalPosterPath,
  generalProfilePath,
  generalBdPath,
  generalLogoPath,
  generalStillPath
};
