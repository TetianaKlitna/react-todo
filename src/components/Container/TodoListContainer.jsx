import styles from "./TodoListContainer.module.css";
import { useState, useMemo } from "react";
import TodoList from "./TodoList/TodoList.jsx";
import SearchForm from "./Search/SearchForm.jsx";
import useApi from "../../hooks/useApi.jsx";

function TodoListContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const { todoList, isLoading, isError, deleteData, updateData } = useApi();

  const handleRemoveTodo = (todo) => {
    deleteData(todo);
  };

  const handleDoneTodo = (todo) => {
    console.log(todo);
    updateData(todo);
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
    <div className={styles["main-content"]}>
      <SearchForm setNewFilter={setSearchTerm} />
      {isLoading ? (
        <div className={styles["spinner"]}></div>
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        <div>
          {searchTerm && <p>Filter applied: {searchTerm} </p>}
          {!filteredTodos.length ? (
            <p>No tasks in your ToDo list.</p>
          ) : (
            <TodoList
              todoList={filteredTodos}
              onDoneItem={handleDoneTodo}
              onRemoveItem={handleRemoveTodo}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TodoListContainer;
