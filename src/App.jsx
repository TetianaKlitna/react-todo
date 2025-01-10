import "./App.css";
import { Fragment, useState, useEffect, useMemo } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";
import SearchForm from "./components/SearchForm.jsx";

const url = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${encodeURIComponent(import.meta.env.VITE_TABLE_NAME)}`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });

      setTodoList(todos);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostTodo = async (todo) => {
    const todoData = {
      fields: {
        title: todo.title,
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(todoData),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error has ocurred: ${response.error}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      const addedTodo = {
        id: dataResponse.id,
        title: dataResponse.fields.title,
      };
      const newTodoList = [...todoList, addedTodo];
      setTodoList(newTodoList);
      console.log(
        `Added record with id: ${addedTodo.id} title: ${addedTodo.title}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRemoveTodo = async (todo) => {
    const deleteRecords = `?records[]=${todo.id}`;

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url + deleteRecords, options);

      if (!response.ok) {
        const message = `Error has ocurred: ${response.error}`;
        throw new Error(message);
      }

      const data = await response.json();
      const deletedIds = data.records.map((item) => item.id);
      const newToDoList = todoList.filter(
        (item) => !deletedIds.includes(item.id)
      );
      setTodoList(newToDoList);
      console.log(`Removed record with id: ${todo.id} title: ${todo.title}`);
    } catch (error) {
      console.log(error.message);
    }
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
