import { useNavigate  } from "react-router-dom";

const TodoListItem = ({ item, onRemoveTodo }) => {  

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${item.id}`, {
      state: { todos: item }, 
    });
  };

  return (
    <li>
      {item.title}
      <button onClick={handleViewClick}>View</button>
      <button onClick={() => onRemoveTodo(item)}>
        <strong>X</strong>
      </button>
    </li>
  );
};

export default TodoListItem;
