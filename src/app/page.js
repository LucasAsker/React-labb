"use client"
import { useState, useRef } from "react";
import Todo from "./todo"


export default function Home() {

  const [todos, setTodos] = useState(["Träna", "Skriva uppsats"]);

  const titleInput = useRef();
  const gradeInput = useRef();
  const createTodo = () => {

    const newTodo = inputElement.current.value;

    setTodos([...todos, newTodo]);
  }
  const deleteTodo = (todoPosition) => {
    const newTodos = [...todos];
    newTodos.splice(todoPosition, 1);
    setTodos(newTodos);
  }
  const sortByTitle = () => {
    const sortedTodos = [...todos];
    setTodos(sortedTodos.sort());
  }
  return (
    <article>
      <h1> Filmlista </h1>
      <h2> Film </h2>
      <input ref={titleInput}/>
      <h2> betyg </h2>
      <input ref={gradeInput}/>
      <button onClick={createTodo}> Spara! </button>
      <h2> Filmer </h2>
      <button onClick={sortByTitle}>Sortera</button>
      <ul>
        {todos.map((todo, i) => {
          return <Todo title={todo} index={i} deleteTodo={deleteTodo}/>
        })}
      </ul>
    </article>
  );
}
