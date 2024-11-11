import { TASKS } from "../data/dummy.jsx";

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
