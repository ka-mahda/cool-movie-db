import React, { useContext } from "react";
import "./App.css";
import Mainpage from "./SitePages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ResultOfSearch from "./SitePages/SearchPage";
import DetailMoviePage from "./SitePages/MoviePage";
import DetailTVPage from "./SitePages/TVPage";
import ActorBiography from "./Components/ActorBiography";
import MovieGenres from "./SitePages/MovieGenresPage"
import TvGenres from "./SitePages/TvGenresPage"
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/search/:result" element={<ResultOfSearch />} />
          <Route path="/movie/:id" element={<DetailMoviePage />} />
          <Route path="/tv/:id" element={<DetailTVPage />} />
          <Route path="/person/:id" element={<ActorBiography />} />
          <Route path="/movieGenres/:result" element={<MovieGenres />} />
          <Route path="/tvGenres/:result" element={<TvGenres />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
