import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
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
