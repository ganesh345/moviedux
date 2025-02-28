import React, { useState, useEffect } from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

export default function Moviesgrid() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setmovies(data));
  }, []);
  return (
    <div className="movies-grid">                          { /* create a div with the class name movies-grid*/}
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie}> { /*pass the movie object to the Moviecard component*/ }
        </Moviecard> 
      ))}
    </div>
  );
}
