import styles from "./TodoTable.module.css";
import PropTypes from "prop-types";
import { Fragment, useState, useEffect } from "react";

import useStorageState from "../../../hooks/useStorageState";

import TodoTitle from "../TodoItem/TodoTitle";
import TodoItem from "../TodoItem/TodoItem";
import TodoPageNav from "../TodoPageNav/TodoPageNav";

import {
  sortByCompletedAt,
  sortByPriority,
  sortByString,
} from "../../../utils/sort";

const TodoTable = ({ todoList, todosPerPage, onRemoveItem, onDoneItem }) => {
  const [sortOrder, setSortOrder] = useState({ column: null, direction: null });
  const [currentPage, setCurrentPage] = useStorageState("currentPage", 1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(todoList.length / todosPerPage) || 1
  );

  const getItemsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * todosPerPage;
    const endIndex = startIndex + todosPerPage;
    return todoList.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const pages = Math.ceil(todoList.length / todosPerPage) || 1;
    setTotalPages(pages);
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  }, [todoList]);

  const handleSortEvent = (nameColumn) => {
    const newDirection = sortOrder.direction === "asc" ? "desc" : "asc";
    setSortOrder({ column: nameColumn, direction: newDirection });

    todoList.sort((a, b) => {
      const aVal = a[nameColumn];
      const bVal = b[nameColumn];
      if (nameColumn === "completedAt")
        return sortByCompletedAt(aVal, bVal, newDirection);
      if (nameColumn === "priority")
        return sortByPriority(aVal, bVal, newDirection);
      return sortByString(aVal, bVal, newDirection);
    });
  };

  return (
    <Fragment>
      <table className={styles["todo-table"]}>
        <thead>
          <TodoTitle
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onSortClick={handleSortEvent}
          />
        </thead>
        <tbody>
          {getItemsForCurrentPage().map((task) => (
            <TodoItem
              className="right-align"
              key={task.id}
              item={task}
              onRemoveTodo={onRemoveItem}
              onDoneTodo={onDoneItem}
            />
          ))}
        </tbody>
      </table>
      <TodoPageNav
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Fragment>
  );
};

TodoTable.propTypes = {
  todoList: PropTypes.array,
  todosPerPage: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onDoneItem: PropTypes.func,
};

export default TodoTable;
