import React, { useState, useEffect } from "react";
import Search from "./Search";
import Tweets from "./Tweets";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Search />
      </div>
      <Tweets />
      <Tweets />
      <Tweets />
    </div>
  );
};

export default Home;
