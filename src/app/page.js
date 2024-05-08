"use client"
import { useState, useRef } from "react";
import Todo from "./todo"
import todo from "./todo";


export default function Home() {

  const [todos, setTodos] = useState(["Träna", "Skriva uppsats"]);

  const inputElement = useRef();
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
      <h1> Todo list! </h1>
      <input ref={inputElement}/>
      <button onClick={createTodo}> Spara! </button>
      <h2> Todos </h2>
      <button onClick={sortByTitle}>Sortera</button>
      <ul>
        {todos.map((todo, i) => {
          return <Todo title={todo} index={i} deleteTodo={deleteTodo}/>
        })}
      </ul>
    </article>
  );
}
