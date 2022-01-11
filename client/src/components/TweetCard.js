import "./TweetCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RepeatIcon from "@mui/icons-material/Repeat";
import screenshot from "./screenshot.png";
import { Avatar } from "@material-ui/core";
import avatar from "./avatar.png";

const TweetCard = ({ tweets }) => {
  const { data } = tweets;
  const { users } = tweets.includes;

  if (data) {
    function mergeObjects(arr1, arr2) {
      return arr1.map((item, index) => {
        return {
          ...item,
          ...arr2[index],
        };
      });
    }
    const merged = mergeObjects(data, users);
    const tweetCards = merged.map((tweet) => {
      return (
        <div className="tweet" key={tweet.id}>
          <div className="tweet__avatar">
            <Avatar
              src={tweet.profile_image ? tweet.profile_image_url : avatar}
              alt="avatar"
            />
          </div>
          <div className="tweet__body">
            <div className="tweet__header">
              <div className="tweet__headerText">
                <h3>{tweet.user}</h3>

                <p className="tweet__twitterHandle">@{tweet.username}</p>
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
  } else {
    return null;
  }
};

export default TweetCard;
