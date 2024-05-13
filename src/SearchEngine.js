import React from "react";
import "./SearchEngine.css";

export default function Search() {
  return (
    <header>
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="search-input"
        />
        <input type="submit" value="Search" className="search-submit" />
      </form>
    </header>
  );
}
