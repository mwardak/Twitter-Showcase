import React, { useState, useEffect } from "react";
import TweetCardFavourite from "./TweetCardFavourite";
import "./Home.css";
import "./Favourite.css";
import axios from "axios";

import SportsHockey from "@mui/icons-material/SportsHockey";
import SportsBasketball from "@mui/icons-material/SportsBasketball";
import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsBaseball from "@mui/icons-material/SportsBaseball";
import { brown, orange, green } from "@mui/material/colors";

import { use } from "express/lib/application";

const Favourite = () => {
  const [favouriteTweets, setFavouriteTweets] = useState([]);

  const handleClick = async (e, id) => {
    e.preventDefault();

    // const favouriteSports = [
    //   { id: 50004938, name: "NHL" },
    //   { id: 19923144, name: "NBA" },
    //   { id: 19426551, name: "NFL" },
    //   { id: 18479513, name: "MLB" },
    // ];

    const searchResponse = await axios.get(`/api/search/favourite?id=${id}`);

    setFavouriteTweets(searchResponse.data);
  };

  // useEffect(() => {
  //   console.log(favouriteTweets);
  // }, [favouriteTweets]);

  const colorBrown = brown[500];
  const colorOrange = orange[800];
  const colorGreen = green[600];

  const iconStyle = {
    fontSize: "50px",
    margin: "0px",
    padding: "0px",
  };

  return (
    <div className="home">
      <div className="home__header">
        <div className="favourite">
          <div className="favourite__card">
            <SportsHockey style={iconStyle} color="primary" />

            <button
              onClick={(e) => handleClick(e, 50004938)}
              className="favourite__button"
              type="button"
              name="@NHL"
            >
              @NHL
            </button>
          </div>
          <div className="favourite__card">
            <SportsBasketball style={iconStyle} sx={{ color: colorOrange }} />
            <button
              onClick={(e) => handleClick(e, 19923144)}
              className="favourite__button"
              type="button"
              name="@NBA"
            >
              @NBA
            </button>
          </div>
          <div className="favourite__card">
            <SportsBaseball style={iconStyle} sx={{ color: colorGreen }} />
            <button
              onClick={(e) => handleClick(e, 18479513)}
              className="favourite__button"
              type="button"
              name="@MLB"
            >
              @MLB
            </button>
          </div>
          <div className="favourite__card">
            <SportsFootball style={iconStyle} sx={{ color: colorBrown }} />
            <button
              onClick={(e) => handleClick(e, 19426551)}
              className="favourite__button"
              type="button"
              name="@NFL"
            >
              @NFL
            </button>
          </div>
        </div>
      </div>
      <TweetCardFavourite favouriteTweets={favouriteTweets} />
    </div>
  );
};

export default Favourite;
