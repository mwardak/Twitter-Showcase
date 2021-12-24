import React from "react";
import "./Tweets.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";
import screenshot from "./screenshot.png";
import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const Tweets = () => {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__headerText">
            <h3>
              {" "}
              Elon Musk <span className="post__twitterHandle">@elonmusk</span>
            </h3>
            <div className="">
              <p>This is a tweet</p>
            </div>
            <img src={screenshot} />
            <div className="tweet__footer">
              <ThumbUpIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
