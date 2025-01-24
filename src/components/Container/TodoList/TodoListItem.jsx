import { useNavigate } from "react-router-dom";
import styles from "./TodoListItem.module.css";
import RemoveImg from "../../../assets/remove-btn.svg?react";
import DoneImg from "../../../assets/done-btn.svg?react";
import ViewImg from "../../../assets/view-btn.svg?react";
import ItemImg from "../../../assets/item-img.svg?react"

const TodoListItem = ({ item, onRemoveTodo, onDoneTodo }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${item.id}`, {
      state: { todos: item },
    });
  };

  return (
    <li className={styles.item}>
      <span style={{ width: "65%", display: "flex", alignItems: "center" }}>
        <ItemImg alt="Item Icon" width="20px" height="20px"/>
        {item.title}
      </span>
      <span style={{ width: "35%" }}>
        <button
          className={`tooltip ${styles["btn"]}`}
          onClick={handleViewClick}
        >
          <ViewImg alt="View Item Icon" width="20px" height="20px" />
          <span className="tooltiptext">View</span>
        </button>

        <button
          className={`tooltip ${styles["btn"]}`}
          onClick={() => onDoneTodo(item)}
        >
          <DoneImg alt="Done Item Icon" width="20px" height="20px" />
          <span className="tooltiptext">Done</span>
        </button>

        <button
          className={`tooltip ${styles["btn"]}`}
          onClick={() => onRemoveTodo(item)}
        >
          <RemoveImg alt="Remove Item Icon" width="20px" height="20px" />
          <span className="tooltiptext">Delete</span>
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
