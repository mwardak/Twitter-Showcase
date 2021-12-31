import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import TweetCard from "./TweetCard";

const Search = () => {
  //use search term from the input field to search twitter
  const [searchTerm, setSearchTerm] = useState("");
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //handle the search term from the input field
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const searchResponse = await axios.get(
      `/api/search/all?search=${searchTerm}`
    );

    setTweets(searchResponse.data);
    setIsLoading(false);

    setSearchTerm("");
  };

  //pass tweets to the Tweets component
  // useEffect(() => {
  //   console.log(tweets);
  // }, [tweets]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search__input">
        <SearchIcon className="search__searchIcon" />
        <input
          onChange={(e) => handleSearchTerm(e)}
          value={searchTerm}
          type="text"
          placeholder="Search Twitter"
        />
      </form>
      <TweetCard tweets={tweets} isLoading={isLoading} />
    </div>
  );
};

export default Search;
