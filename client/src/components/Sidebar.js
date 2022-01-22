import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <Link to="/">
        <SidebarOption Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/favourite">
        <SidebarOption Icon={FavoriteIcon} text="Favourite Tweets" />
      </Link>
    </div>
  );
};

export default Sidebar;
