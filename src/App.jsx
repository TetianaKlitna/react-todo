import "./App.css";
import { Fragment } from "react";
import useSemiPersistentState from "./hooks/useSemiPersistentState.jsx";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

function App() {
  const [todoList, setTodoList] = useSemiPersistentState(
    "savedTodoList",
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  const addTodo = (newTodo) => {
    const newToDoList = [...todoList, newTodo];
    setTodoList(newToDoList);
  };

  const handleRemove = (id) => {
    const newToDoList = todoList.filter((item) => item.id !== id);
    setTodoList(newToDoList);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveItem={handleRemove} />
    </Fragment>
  );
}

export default App;
