"use client"
import { useState, useRef } from "react";
import Todo from "./movie"


export default function Home() {

  const [movies, setMovies] = useState(["Star Wars: A new hope", "Fight club"]);

  const titleInput = useRef();
  const gradeInput = useRef();
  const addMovie = () => {

    const newMovie = inputElement.current.value;

    setMovies([...movies, newMovie]);
  }
  const deleteMovie = (moviePosition) => {
    const newMovie = [...movies];
    newMovie.splice(moviePosition, 1);
    setMovies(newMovie);
  }
  const sortByTitle = () => {
    const sortedMovies = [...movies];
    setMovies(sortedMovies.sort());
  }
  return (
    <article>
      <h1> Filmlista </h1>
      <h3> Film </h3>
      <input ref={titleInput}/>
      <h2> betyg </h2>
      <select ref={gradeInput}>
        <option selected value="0"> Välj betyg...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={addMovie}> Spara! </button>
      <h2> Filmer </h2>
      <button onClick={sortByTitle}>Sortera</button>
      <ul>
        {movies.map((movie, i) => {
          return <Todo title={movie} index={i} deleteMovie={deleteMovie}/>
        })}
      </ul>
    </article>
  );
}
// "npm run dev" för att starta