import React from "react";
import Mainpage from "./SitePages/MainPage";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ResultOfSearch from "./SitePages/SearchPage";
import DetailMoviePage  from "./SitePages/MoviePage";
import DetailTVPage  from "./SitePages/TVPage";
import ActorBiography from "./Components/ActorBiography";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/search/:result" element={<ResultOfSearch />} />
          <Route path="/movie/:id" element={<DetailMoviePage />} />
          <Route path="/tv/:id" element={<DetailTVPage />} />
          <Route path="/person/:id" element={<ActorBiography />} />
         </Routes>
       </BrowserRouter>
       <Footer/>
   </>
  );
}

export default App;
