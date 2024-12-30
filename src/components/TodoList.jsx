import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({ todoList, onRemoveItem }) => {
  return (
    <ul>
      {todoList.map((task) => (
        <TodoListItem key={task.id} item={task} onRemoveTodo={onRemoveItem} />
      ))}
    </ul>
  );
};

export default TodoList;