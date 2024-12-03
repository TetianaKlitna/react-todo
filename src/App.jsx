import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

function App() {
  const useSemiPersistentState = (key, initialValue) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(key)) || initialValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
  };
  const [todoList, setTodoList] = useSemiPersistentState(
    "savedTodoList",
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  const addTodo = (newTodo) => {
    const newToDoList = [...todoList, newTodo];
    setTodoList(newToDoList);
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </React.Fragment>
  );
}

export default App;
