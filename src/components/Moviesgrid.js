import React, { useState } from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

export default function Moviesgrid({ movies, watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const HandleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const HandleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const HandleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchGenre(movie, genre) &&
      matchRating(movie, rating) &&
      matchSearch(movie, search)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search by movie name"
        value={search}
        onChange={HandleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={HandleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={HandleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Bad</option>
            <option>ok</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {" "}
        {/* create a div with the class name movies-grid*/}
        {filteredMovies.map((movie) => (
          <Moviecard
            key={movie.id}
            movie={movie}
            toogleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          >
          </Moviecard>
        ))}
      </div>
    </div>
  );
}
