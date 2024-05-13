'use client'
import React, { useState } from "react";
import Movie from "./movie";
import starImage from "./images/star.png";
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

  const renderStars = (grade) => {
    const stars = [];
    for (let i = 0; i < grade; i++) {
      stars.push(<img key={i} src={starImage.src} alt="star" />);
    }
    return stars;
  };

  return (
    <article>
      <h2> Filmlista </h2>
      <TextControlsExample addMovie={addMovie} />
      <hr />
      <h2>Filmer</h2>
      <Button variant={"primary"} onClick={sortByTitle}>Sortera</Button>
      <ul>
        {movies.map((movie, i) => (
          <Movie
            key={i}
            title={movie.title}
            grade={renderStars(movie.grade)} 
            index={i}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
    </article>
  );
}
