// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import Mainpage from "./SitePages/MainPage";
import GlobalStyle from "./Styles/GlobalStyle";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getLatestMovie} from "./Components/Navbars";
import { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ResultOfSearch from "./SitePages/SearchPage";

function App() {
  // useEffect(()=>{
        
  //   getLatestMovie().then((data) => {
  //     console.log(data)
      
  //   });
   
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          {/* <Route path="/" element={<Search />}></Route> */}
          <Route path="/search/:result" element={<ResultOfSearch />} />
         </Routes>
       </BrowserRouter>
       <Footer/>
   </>
  );
}

export default App;
