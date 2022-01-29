import React, { useEffect, useState } from "react";
import "./TweetCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";

import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const TweetCard = ({ favouriteTweets }) => {
  //create a state to store the favourite tweets

  const tweetCards = favouriteTweets?.data?.map((tweet) => {
    console.log(tweet);
    return (
      <div className="tweet">
        <div className="tweet__avatar">
          <Avatar
            src={tweet.profile_image_url ? tweet.profile_image_url : avatar}
            alt="avatar"
          />
        </div>
        <div className="tweet__body">
          <div className="tweet__header">
            < div className="tweet__headerText">
              <h3>{tweet.user}</h3>
              /* write conditional rendering for id*/
              {tweet.id === 50004938 ? (
                <h4>@NHL</h4>}
              {tweet.id === 19923144 ? (
                <h4>@NBA</h4> }
              {tweet.id === 19426551 ? (
                <h4>@NFL</h4> }
              {tweet.id === 18479513 ? (
                <h4>@MLB</h4> }


              <p className="tweet__twitterHandle">@{tweet.id}</p>
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

  return <div>{tweetCards}</div>;
};

export default TweetCard;
