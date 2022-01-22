import React from "react";
import TweetCardFavourite from "./TweetCardFavourite";
import "./Home.css";
import "./Favourite.css";

import SportsHockey from "@mui/icons-material/SportsHockey";
import SportsBasketball from "@mui/icons-material/SportsBasketball";
import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsBaseball from "@mui/icons-material/SportsBaseball";
import { brown, orange, green } from "@mui/material/colors";
import TweetCard from "./TweetCard";

//declare state variables for favourite tweets and their respectiv

const Favourite = () => {
  const [favouriteTweets, setFavouriteTweets] = useState([]);

  //handle click event for each favourite sport
  const handleClick = async (e) => {
    e.preventDefault();

    const favouriteSports = [
      { id: 5004938, name: "NHL" },
      { id: 19923144, name: "NBA" },
      { id: 19426551, name: "NFL" },
      { id: 18479513, name: "MLB" },
    ];

    favouriteSports.forEach((sport) => {
      const searchResponse = await axios.get(
        `/api/search/favourite=${sport.id}`
      );

      //add each favourite sport to the favouriteTweets array
      setFavouriteTweets(searchResponse.data);
    });
  };

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
            /** create an onclick for all buttons */
            <button
              onclick={(e) => handleClick(e)}
              className="favourite__button"
              type="button"
              name="@NHL"
            >
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
      <TweetCardFavourite tweets={favouriteTweets} />
    </div>
  );
};

export default Favourite;
