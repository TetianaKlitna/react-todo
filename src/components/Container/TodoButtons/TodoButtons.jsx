import styles from "./TodoButtons.module.css";
import PropTypes from "prop-types";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { icons } from "../../../utils/icons";

import clsx from "clsx";

function TodoButtons({ todo, onRemoveTodo }) {
  const { view, edit, remove } = icons;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${todo.id}`, {
      state: { todos: todo },
    });
  };

  const handleEditClick = () => {
    navigate(`/edit-todo-details/${todo.id}`, {
      state: { todos: todo },
    });
  };

  return (
    <Fragment>
      {/* Visible in mobile and tablet views */}
      <input type="checkbox" id={styles["hamburger-btns"]} />

      {/* Visible in desktop view. */}
      <ul className={clsx(styles["nav-btns"], "no-style-list")}>
        <li>
          <button
            className={clsx(styles["nav-btn"], "todo-btn", "center-flex")}
            onClick={handleViewClick}
          >
            <img
              src={view}
              height="20px"
              width="20px"
              alt="View Item Icon"
            />
            <span>View</span>
          </button>
        </li>

        <li>
          <button
            className={clsx(
              styles["nav-btn"],
              "todo-btn",
              "center-flex",
              todo.completedAt && "todo-btn-disabled"
            )}
            disabled={todo.completedAt}
            onClick={handleEditClick}
          >
            <img
              src={edit}
              height="20px"
              width="20px"
              alt="Edit Item Icon"
            />
            <span>Edit</span>
          </button>
        </li>

        <li>
          <button
            className={clsx(styles["nav-btn"], "todo-btn", "center-flex")}
            onClick={() => onRemoveTodo(todo)}
          >
            <img
              src={remove}
              height="20px"
              width="20px"
              alt="Remove Item Icon"
            />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </Fragment>
  );
}

TodoButtons.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoButtons;
