import styles from "./TodoButtons.module.css";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

import { icons } from "../../../utils/icons";

import clsx from "clsx";

function TodoButtons({ todo, onRemoveTodo }) {
  const { view, edit, remove } = icons;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/react-todo/view-todo-details/${todo.id}`, {
      state: { todos: todo },
    });
  };

  const handleEditClick = () => {
    navigate(`/react-todo/edit-todo-details/${todo.id}`, {
      state: { todos: todo },
    });
  };

  return (
    <div className={styles["center-flex"]}>
      {/* Visible in mobile and tablet views */}
      <input type="checkbox" id={styles["hamburger-btns"]} />

      {/* Visible in desktop view. */}
      <ul className={clsx(styles["nav-btns"], "no-style-list")}>
        <li>
          <button
            className={clsx(styles["nav-btn"], "todo-btn", "center-flex")}
            onClick={handleViewClick}
            aria-label="View"
          >
            <img src={view} height="20px" width="20px" alt="View Item Icon" />
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
            aria-label="Edit"
          >
            <img src={edit} height="20px" width="20px" alt="Edit Item Icon" />
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
              aria-label="Remove"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

TodoButtons.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoButtons;
