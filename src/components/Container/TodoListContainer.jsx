import { useState, useMemo, Fragment } from "react";

import TodoList from "./TodoList/TodoList";
import SearchForm from "./Search/SearchForm";
import Loader from "../Loader/Loader";

import useApi from "../../hooks/useApi.jsx";

function TodoListContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const { todoList, isLoading, isError, deleteData, updateData } = useApi();

  const handleRemoveTodo = (todo) => {
    deleteData(todo);
  };

  const handleDoneTodo = (todo) => {
    updateData(todo);
  };

  const filteredTodos = useMemo(() => {
    if (!searchTerm) {
      return todoList;
    }

    return todoList.filter(
      (item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }, [todoList, searchTerm]);

  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        <Fragment>
          {searchTerm && <p>Filter applied: {searchTerm} </p>}
          {!filteredTodos.length && <p>No tasks in your ToDo list.</p>}
          <TodoList
            todoList={filteredTodos}
            todosPerPage={5}
            onDoneItem={handleDoneTodo}
            onRemoveItem={handleRemoveTodo}
          />
        </Fragment>
      )}
    </div>
  );
}

export default TodoListContainer;
