import styles from "./TodoItem.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import TodoButtons from "../TodoButtons/TodoButtons";

const TodoListItem = ({ item, onRemoveTodo, onDoneTodo }) => {

  return (
    <tr className={clsx(styles.item, "plain-border")}>
        <td className={clsx(styles["todo-done"], item.completedAt && styles["todo-completed"])} >
          <input
          checked={item.completedAt}
          type="checkbox"
          id={styles["done-todo"]}
          onChange={() => onDoneTodo(item)}
          />
        </td>
        <td className={clsx(styles["todo-column"], item.completedAt && styles["todo-completed"])} >{item.dueDate}</td>
        <td className={clsx(styles["todo-column"], item.completedAt && styles["todo-completed"])} >{item.priority}</td>
        <td  
          className={clsx(
          styles["todo-task"],
          styles["img-txt"],
          item.completedAt && styles["todo-completed"])}>
          {item.title}
        </td>
        <td>
          <TodoButtons
            todo={item}
            onRemoveTodo={onRemoveTodo}
          />
        </td>
    </tr>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onDoneTodo: PropTypes.func,
};

export default TodoListItem;
