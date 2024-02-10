import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="weather-app">
      <header>
        <form>
          <input
            rel="noreferrer"
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
    </div>
  );
}
