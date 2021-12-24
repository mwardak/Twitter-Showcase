import React, { useState, useEffect } from "react";
import Search from "./Search";
import Tweets from "./Tweets";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <Search />
      </div>
      <Tweets />
      <Tweets />
      <Tweets />
    </div>
  );
};

export default Feed;
