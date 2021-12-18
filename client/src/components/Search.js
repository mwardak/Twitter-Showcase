import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  //create route to test response from server
  const searchTweets = async () => {
    const response = await axios.get("/api/search/all");
    console.log(response);
  };

  const searchFavourite = async () => {
    const response = await axios.get("/api/search/favourite");
    console.log(response);
  };

  useEffect(() => {
    searchTweets();
    searchFavourite();
  }, []);

  return (
    <div className="search">
      <form className="search__input">
        <SearchIcon className="search__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </form>
    </div>
  );
};

export default Search;
