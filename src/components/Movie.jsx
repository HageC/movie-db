import React from "react";
import "../styles/Movie.css";
export default function Movie(props) {
  return (
    <div className="movie">
      <img src={props.Poster} alt={props.Title} />
    </div>
  );
}
