import React from "react";
import Navbar from "./Navbar";
import Movies from "./Movies";
import Search from "./Search";
import "../styles/Main.css";
export default function Main() {
  return (
    <div className="container">
      <Navbar />
      <Search />
      <Movies />
    </div>
  );
}
