import React, { useEffect, useState } from "react";
import "./TweetCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";

import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const TweetCardFavourite = ({ favouriteTweets }) => {
  return favouriteTweets.map((tweet) => {
    return (
      <div className="tweet" key={tweet.id}>
        <div className="tweet__avatar">
          <Avatar
            src={tweet.profile_image_url ? tweet.profile_image_url : avatar}
            alt="avatar"
          />
        </div>
        <div className="tweet__body">
          <div className="tweet__header">
            <div className="tweet__headerText">
              <h3>{tweet.name}</h3>

              <p className="tweet__twitterHandle">{tweet.author.name}</p>
            </div>
            <div className="tweet__headerDescription"></div>
          </div>
          <div className="tweet__content">
            <p>{tweet.text}</p>
          </div>
          <div className="tweet__footer">
            <div className="tweet__footerIcons">
              <p>{tweet.public_metrics.like_count}</p>
              <ThumbUpIcon />
            </div>
            <div className="tweet__footerIcons">
              <p>{tweet.public_metrics.retweet_count}</p>
              <RepeatIcon />
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default TweetCardFavourite;
