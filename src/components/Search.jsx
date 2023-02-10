import React from "react";
import { useGlobalContext } from "../context";
import "../styles/Search.css";
export default function Search() {
  const { search, setSearch } = useGlobalContext();
  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Enter movie/show name.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
