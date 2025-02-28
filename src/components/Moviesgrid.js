import React, { useState, useEffect } from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

export default function Moviesgrid() {
  const [movies, setmovies] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setmovies(data));
  }, []);

  const HandleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = (movies || []).filter((movie) => 
  movie.title?.toLowerCase().includes(String(search || "").toLowerCase())
);

  
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search by movie name"
        value = {search}
        onChange = {HandleSearchChange}
        />
      <div className="movies-grid">                          { /* create a div with the class name movies-grid*/}
      {filteredMovies.map((movie) => (
        <Moviecard key={movie.id} movie={movie}> { /*pass the movie object to the Moviecard component*/ }
        </Moviecard> 
      ))}
    </div>

    </div>
    
  );
}
