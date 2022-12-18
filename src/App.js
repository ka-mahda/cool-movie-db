// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import Mainpage from "./SitePages/MainPage";
import GlobalStyle from "./Styles/GlobalStyle";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getLatestMovie} from "./Components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
        
    getLatestMovie().then((data) => {
      console.log(data)
      
    });
   
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          {/* <Route path="/" element={<Search />}></Route> */}
         </Routes>
       </BrowserRouter>
       {/* <SliderCarousel/> */}
     
      
      {/* <CardDesign/> */}
   </>
  );
}

export default App;
