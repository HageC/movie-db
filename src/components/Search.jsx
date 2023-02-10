import React from "react";

import "../styles/Search.css";
export default function Search() {
  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Enter movie/show name.."
        />
      </div>
    </div>
  );
}
