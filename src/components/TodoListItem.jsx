const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      <button onClick={() => onRemoveTodo(item.id)}>
        <strong>X</strong>
      </button>   
      {item.title}
    </li>
  );
};

export default TodoListItem;
