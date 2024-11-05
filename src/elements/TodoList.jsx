import { TASKS } from "../data/ui.jsx";

const TodoList = () => {
  return (
    <ul>
      {TASKS.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
