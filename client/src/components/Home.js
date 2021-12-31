import React, { useState, useEffect } from "react";
import Search from "./Search";
import TweetCard from "./TweetCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Search />
      </div>
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </div>
  );
};

export default Home;
