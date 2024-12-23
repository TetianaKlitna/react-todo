import "./App.css";
import { Fragment, useState, useEffect } from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
            },
          }),
        2000
      );
    })
      .then((result) => {
        setIsLoading(true);
        setTodoList(result.data.todoList);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

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
      {isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : (
        <TodoList todoList={todoList} onRemoveItem={handleRemove} />
      )}
    </Fragment>
  );
}

export default App;
