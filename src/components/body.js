import React from "react";
import "./main_css/test_main.module.css";

import Home from "./home";
import MiniPlayer from "./miniPlayer";
import Player from "./player";
import Curator from "./curator";
import Header from "./header";
import Search from "./search";
import Navigation from "./nav";
import Background from "./background"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Body = (e) => {
  return (
    <Router>
      <div>
        <header>
          <div>
            <title>Music Recommendation Recsys 07</title>
            <meta charSet="UTF-8" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            />
            <link rel="stylesheet" href="./style.css" />
          </div>
        </header>

        <div className="wrapper">
          {/* 기초 세팅 */}
          <Header />
          <Navigation />
          <MiniPlayer />
          <div className='dim'></div>
          <Player />
          <Background />

          {/* 홈페이지 */}
          <Home />
          <Curator />
          <Routes>
            <Route path="/"></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default Body;
