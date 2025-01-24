import { useNavigate } from "react-router-dom";
import styles from "./TodoListItem.module.css";
import RemoveImg from "../../../assets/remove-btn.svg?react";
import DoneImg from "../../../assets/done-btn.svg?react";
import ViewImg from "../../../assets/view-btn.svg?react";
import ItemImg from "../../../assets/item-img.svg?react";

const TodoListItem = ({ item, onRemoveTodo, onDoneTodo }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${item.id}`, {
      state: { todos: item },
    });
  };

  const toogleCompletedClass = item.completedAt? styles["todo-completed"] :"";

  return (
    <li className={styles.item}>
      <span className={`${styles["todo-task"]} ${toogleCompletedClass}`}>
        <ItemImg alt="Item Icon" width="20px" height="20px" />
        {item.title}
      </span>
      <span className={styles["btns"]}>
        <button onClick={handleViewClick}>
          <ViewImg alt="View Item Icon" width="20px" height="20px" />
          <span>View</span>
        </button>

        <button disabled={item.completedAt} onClick={() => onDoneTodo(item)}>
          <DoneImg alt="Done Item Icon" width="20px" height="20px" />
          <span>Done</span>
        </button>

        <button onClick={() => onRemoveTodo(item)}>
          <RemoveImg alt="Remove Item Icon" width="20px" height="20px" />
          <span>Delete</span>
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
