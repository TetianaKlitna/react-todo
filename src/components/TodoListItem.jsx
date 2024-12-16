const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      {item.title}
      <button onClick={() => onRemoveTodo(item.id)}>
        <strong>X</strong>
      </button>
    </li>
  );
};

export default TodoListItem;
