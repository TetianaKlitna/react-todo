import styles from "./TodoButtons.module.css";
import PropTypes from "prop-types";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {
  getViewIcon,
  getDoneIcon,
  getDeleteIcon,
} from "../../../utils/assetPaths";

import clsx from "clsx";

function TodoButtons({ todo, onRemoveTodo, onDoneTodo }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${todo.id}`, {
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
              src={getViewIcon()}
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
            onClick={() => onDoneTodo(todo)}
          >
            <img
              src={getDoneIcon()}
              height="20px"
              width="20px"
              alt="Done Item Icon"
            />
            <span>Done</span>
          </button>
        </li>

        <li>
          <button
            className={clsx(styles["nav-btn"], "todo-btn", "center-flex")}
            onClick={() => onRemoveTodo(todo)}
          >
            <img
              src={getDeleteIcon()}
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
  onDoneTodo: PropTypes.func,
};

export default TodoButtons;
