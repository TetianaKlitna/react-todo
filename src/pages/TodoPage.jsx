import { Fragment, useState, useMemo } from "react";
import TodoList from "../components/TodoList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import useApi from "../hooks/useApi.jsx";

function TodoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { todoList, isLoading, isError, deleteData } = useApi();

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

  return (
    <Fragment>
      <SearchForm setNewFilter={setSearchTerm} />
      {isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        <div>
          {searchTerm && <p>Filter applied: {searchTerm} </p>}
          {!filteredTodos.length ? (
            <p>No results found with the applied filters</p>
          ) : (
            <TodoList
              todoList={filteredTodos}
              onRemoveItem={handleRemoveTodo}
            />
          )}
        </div>
      )}
    </Fragment>
  );
}

export default TodoPage;
