import React, { useEffect } from "react";
import "./TweetCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";
import screenshot from "./screenshot.png";
import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const TweetCard = ({ tweets }) => {
  const tweetCards = tweets?.data?.map((tweet) => {
    // merge data and includes into an array
    const tweetData = Object.assign({}, tweet.data, tweet.includes);

    console.log(tweetData);

    return (
      <div className="tweet" key={tweet.id}>
        <div className="tweet__avatar">
          <Avatar src={avatar} alt="avatar" />
        </div>
        <div className="tweet__body">
          <div className="tweet__header">
            <div className="tweet__headerText">
              <h3>{tweet.user}</h3>

              <p className="tweet__twitterHandle">@{}</p>
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
