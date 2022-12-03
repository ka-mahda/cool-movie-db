// my api key
export const apiKey = "611a68ca1ffe82894a9aca2a12db97f8";

// urls
const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const upcomingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const popularTV = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
const latesTV = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;
const Genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

export {
  apiKey,
  popularMovie,
  upcomingMovie,
  popularTV,
  latesTV,
  Genres
};
