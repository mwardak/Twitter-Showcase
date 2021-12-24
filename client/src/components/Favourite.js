import React from "react";
import Feed from "./Feed.js";
import Sidebar from "./Sidebar.js";
import "./Feed.css";
import "./Favourite.css";
import Tweets from "./Tweets.js";
const Favourite = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <div className="favourite">
          <div className="favourite__card">
            <input type="img" placeholder="Search Twitter" />
          </div>
          <div className="favourite__card">
            <input type="img" placeholder="Search Twitter" />
          </div>
          <div className="favourite__card">
            <input type="img" placeholder="Search Twitter" />
          </div>
          <div className="favourite__card">
            <input type="img" placeholder="Search Twitter" />
          </div>
        </div>
      </div>
      <Tweets />
      <Tweets />
      <Tweets />
    </div>
  );
};

export default Favourite;
