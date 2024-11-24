import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((task) => (
        <TodoListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

export default TodoList;
