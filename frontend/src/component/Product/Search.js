import React, { Fragment, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <Fragment>
      <form className="searchBox" onSubmit={(e) => searchSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Enter Item to search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
