import React from "react";

import "./Home.css";
import "./Favourite.css";
import Tweets from "./Tweets.js";
import SportsHockey from "@mui/icons-material/SportsHockey";
import SportsBasketball from "@mui/icons-material/SportsBasketball";
import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsBaseball from "@mui/icons-material/SportsBaseball";
import { brown, orange, green } from "@mui/material/colors";

const colorBrown = brown[500];
const colorOrange = orange[800];
const colorGreen = green[600];

const Favourite = () => {
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

            <button className="favourite__button" type="button" name="@NHL">
              @NHL
            </button>
          </div>
          <div className="favourite__card">
            <SportsBasketball style={iconStyle} sx={{ color: colorOrange }} />
            <button className="favourite__button" type="button" name="@NBA">
              @NBA
            </button>
          </div>
          <div className="favourite__card">
            <SportsBaseball style={iconStyle} sx={{ color: colorGreen }} />
            <button className="favourite__button" type="button" name="@MLB">
              @MLB
            </button>
          </div>
          <div className="favourite__card">
            <SportsFootball style={iconStyle} sx={{ color: colorBrown }} />
            <button className="favourite__button" type="button" name="@NFL">
              @NFL
            </button>
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
