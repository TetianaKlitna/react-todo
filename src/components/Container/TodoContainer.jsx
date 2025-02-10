import { useState, useMemo, Fragment } from "react";

import TodoTable from "./TodoTable/TodoTable";
import SearchForm from "./Search/SearchForm";
import Loader from "../Loader/Loader";

import useApi from "../../hooks/useApi.jsx";

function TodoListContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const { todoList, isLoading, isError, deleteData, doneData, updateData } = useApi();

  const handleRemoveTodo = (todo) => {
    deleteData(todo);
  };

  const handleDoneTodo = (todo) => {
    doneData(todo);
  }

  const filteredTodos = useMemo(() => {
    if (!searchTerm) {
      return todoList;
    }

    return todoList.filter(
      (item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }, [todoList, searchTerm]);

  return (
    <Fragment>
      <SearchForm setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        <Fragment>
          {searchTerm && <p>Filter applied: {searchTerm} </p>}
          {!filteredTodos.length && <p>No tasks in your ToDo list.</p>}
          <TodoTable
            todoList={filteredTodos}
            todosPerPage={5}
            onRemoveItem={handleRemoveTodo}
            onDoneItem={handleDoneTodo}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

export default TodoListContainer;
