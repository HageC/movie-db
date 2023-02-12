import React from "react";
import Movie from "./Movie";
import { useGlobalContext } from "../context";
import "../styles/Movies.css";
export default function Movies() {
  const { error, isLoading, movies } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error.error) {
    return <h1>{`${error.msg}`}</h1>;
  }

  return (
    <div className="movies-section">
      <div className="movies">
        {movies?.Search.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })}
      </div>
    </div>
  );
}
