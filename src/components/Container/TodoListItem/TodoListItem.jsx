import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import TodoButtons from "../TodoButtons/TodoButtons";

const TodoListItem = ({ item, onRemoveTodo, onDoneTodo }) => {
 
  const toogleCompletedClass = item.completedAt ? styles["todo-completed"] : "";

  return (
    <li className={clsx(styles.item, "plain-border")}>
      <div className={`${styles["todo-task"]} ${toogleCompletedClass} ${styles["img-txt"]}`}>
        <img
          src="src/assets/item-img.svg"
          height="20px"
          width="20px"
          alt="Item Icon"
        />
        {item.title}
      </div>

      <TodoButtons todo={item} onRemoveTodo={onRemoveTodo} onDoneTodo={onDoneTodo} />
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onDoneTodo: PropTypes.func,
};

export default TodoListItem;
