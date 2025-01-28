import { useNavigate } from "react-router-dom";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ item, onRemoveTodo, onDoneTodo }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${item.id}`, {
      state: { todos: item },
    });
  };

  const toogleCompletedClass = item.completedAt ? styles["todo-completed"] : "";

  return (
    <li className={styles.item}>
      <span
        className={`${styles["todo-task"]} ${toogleCompletedClass} ${styles["img-txt"]}`}
      >
        <img
          src="src/assets/item-img.svg"
          height="20px"
          width="20px"
          alt="Item Icon"
        />
        {item.title}
      </span>

      {/* Visible in mobile and tablet views */}
      <input type="checkbox" id={styles["humburger-btns"]} />

      {/* Visible in desktop view. */}
      <ul className={styles["nav-btns"]}>
        <li>
          <button onClick={handleViewClick}>
            <img
              src="src/assets/view-btn.svg"
              height="20px"
              width="20px"
              alt="View Item Icon"
            />
            <span>View</span>
          </button>
        </li>

        <li>
          <button disabled={item.completedAt} onClick={() => onDoneTodo(item)}>
            <img
              src="src/assets/done-btn.svg"
              height="20px"
              width="20px"
              alt="Done Item Icon"
            />
            <span>Done</span>
          </button>
        </li>

        <li>
          <button onClick={() => onRemoveTodo(item)}>
            <img
              src="src/assets/remove-btn.svg"
              height="20px"
              width="20px"
              alt="Remove Item Icon"
            />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </li>
  );
};

export default TodoListItem;
