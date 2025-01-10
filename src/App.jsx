import "./App.css";
import { Fragment, useState, useMemo } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";
import SearchForm from "./components/SearchForm.jsx";
import useApi from "./hooks/useApi.jsx";


function App() {
  // const [todoList, setTodoList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { todoList, isLoading, isError, postData, deleteData} = useApi();

  const handlePostTodo = (todo) => {
    postData(todo);
  };

  const handleRemoveTodo = (todo) => {
    deleteData(todo);
  };

  const filteredTodos = useMemo(() => {

    if (!searchTerm) {
      return todoList;
    }

    return todoList.filter(
      (item) =>
        item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }, [todoList, searchTerm]);

  if (isError) {
    return <div><strong>Something goes wrong...</strong></div>;  
  }

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onPostItem={handlePostTodo} />
      <hr />
      <SearchForm setNewFilter={setSearchTerm} />
      {isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : (
        <TodoList todoList={filteredTodos} onRemoveItem={handleRemoveTodo} />
      )}
    </Fragment>
  );
}

export default App;
