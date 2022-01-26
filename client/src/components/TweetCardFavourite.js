import React, { useEffect, useState } from "react";
import "./TweetCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";

import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const TweetCard = ({ favouriteTweets }) => {
  //create a state to store the favourite tweets
  // console.log(favouriteTweets);
  // const tweetCards = favouriteTweets.map((tweet) => {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar
          // src={}
          alt="avatar"
        />
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__headerText">
            <h3>tweet.user</h3>

            <p className="tweet__twitterHandle">@</p>
          </div>
          <div className="tweet__headerDescription"></div>
        </div>
        <div className="tweet__content">
          <p>{}</p>
        </div>
        <div className="tweet__footer">
          <div className="tweet__footerIcons">
            <p>{}</p>
            <ThumbUpIcon />
          </div>
          <div className="tweet__footerIcons">
            <p>{}</p>
            <RepeatIcon />
          </div>
        </div>
      </div>
    </div>
  );
  // });

  // return <div>{tweetCards}</div>;
};

export default TweetCard;
