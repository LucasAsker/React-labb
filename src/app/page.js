"use client"
import React, { useState, useRef } from "react";
import Movie from "./movie";
import "./globals.css"; // Assuming this file contains global styles
import starImage from "./images/star.png";

export default function Home() {
  const [movies, setMovies] = useState([
    { title: "Star Wars", grade: 5 },
    { title: "Fight club", grade: 2 }
  ]);

  const titleInput = useRef();
  const gradeInput = useRef();

  const addMovie = () => {
    const newMovie = {
      title: titleInput.current.value,
      grade: parseInt(gradeInput.current.value)
    };

    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (moviePosition) => {
    const newMovies = [...movies];
    newMovies.splice(moviePosition, 1);
    setMovies(newMovies);
  };

  const sortByTitle = () => {
    const sortedMovies = [...movies];
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const renderStars = (grade) => {
    const stars = [];
    for (let i = 0; i < grade; i++) {
      stars.push(<img key={i} src={starImage.src} alt="star" />);
    }
    return stars;
  };

  return (
    <article>
      <h1>Filmlista</h1>
      <h3>Lägg till film</h3>
      <input ref={titleInput} />
      <h3>Lägg till betyg</h3>
      <select ref={gradeInput}>
        <option selected value="0">Välj betyg...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={addMovie}>Spara!</button>
      <hr />
      <h2>Filmer</h2>
      <button onClick={sortByTitle}>Sortera</button>
      <ul>
        {movies.map((movie, i) => (
          <Movie
            key={i}
            title={movie.title}
            grade={renderStars(movie.grade)} // Rendering stars instead of grade
            index={i}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
    </article>
  );
}
