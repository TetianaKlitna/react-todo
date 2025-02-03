import PropTypes from "prop-types";
import { Fragment, useState, useEffect } from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import TodoPageNav from "../TodoPageNav/TodoPageNav";

const TodoList = ({ todoList, todosPerPage, onRemoveItem, onDoneItem }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(todoList.length / todosPerPage) || 1
  );

  const getItemsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * todosPerPage;
    const endIndex = startIndex + todosPerPage;
    return todoList.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(todoList.length / todosPerPage) || 1);
    setCurrentPage(1);
  }, [todoList, todosPerPage]);

  return (
    <Fragment>

      <ul className="no-style-list">
        {getItemsForCurrentPage().map((task) => (
          <TodoListItem
            className="right-align"
            key={task.id}
            item={task}
            onRemoveTodo={onRemoveItem}
            onDoneTodo={onDoneItem}
          />
        ))}
      </ul>
      
      <TodoPageNav currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
      
    </Fragment>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  todosPerPage: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onDoneItem: PropTypes.func,
};

export default TodoList;
