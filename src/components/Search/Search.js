import { useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [searchData, setSearchData] = useState("");

  const inputHandler = (e) => {
    setSearchData(e.target.value);
  };

  const clickHandler = () => {
    props.onSearch(searchData);
  };

  return (
    <div className={classes.search__section}>
      <input onChange={inputHandler} placeholder="Search" />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};

export default Search;
