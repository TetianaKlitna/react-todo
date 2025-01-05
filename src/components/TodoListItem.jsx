const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      {item.title}
      <button onClick={() => onRemoveTodo(item)}>
        <strong>X</strong>
      </button>
    </li>
  );
};

export default TodoListItem;
