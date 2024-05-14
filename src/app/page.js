'use client'
import React, { useState } from "react";
import Movie from "./movie";
import Button from "./button";
import TextControlsExample from "./form"; 

export default function Home() {
  const [movies, setMovies] = useState([
    { title: "Star Wars", grade: 5 },
    { title: "Fight club", grade: 2 }
  ]);

  const addMovie = (newMovie) => {
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

  const sortByGrade = () => {
    const sortedMovies = [...movies];
    sortedMovies.sort((a, b) => b.grade - a.grade);
    setMovies(sortedMovies);
  };

  return (
    <article>
      <h2> Filmlista </h2>
      <TextControlsExample addMovie={addMovie} />
      <hr />
      <h2>Filmer</h2>
      <Button variant={"primary"} onClick={sortByTitle}>Sortera titel</Button>
      <Button variant={"primary"} onClick={sortByGrade}>Sortera betyg</Button>
      <ul>
        {movies.map((movie, i) => (
          <Movie
            key={i}
            title={movie.title}
            grade={movie.grade} 
            index={i}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
    </article>
  );
}
