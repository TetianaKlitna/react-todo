import TodoListItem from "./TodoListItem.jsx";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveItem, onDoneItem }) => {
  return (
    <ul className={styles["vertical-list"]}>
      {todoList.map((task) => (
        <TodoListItem
          className="right-align"
          key={task.id}
          item={task}
          onRemoveTodo={onRemoveItem}
          onDoneTodo={onDoneItem}
        />
      ))}
    </ul>
  );
};

export default TodoList;
