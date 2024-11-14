import { TASKS } from "../data/dummy.jsx";
import TodoListItem from "./TodoListItem.jsx";

const TodoList = () => {
  return (
    <ul>
      {TASKS.map((task) => (
        <TodoListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

export default TodoList;
