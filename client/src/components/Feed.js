import React, { useState, useEffect } from "react";
import Search from "./Search";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__header">
        <Search />
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
