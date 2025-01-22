import { useNavigate } from "react-router-dom";
import style from "./css/TodoListItem.module.css"

const TodoListItem = ({ item, onRemoveTodo }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/view-todo-details/${item.id}`, {
      state: { todos: item },
    });
  };

  const handleEditClick = () => {
    navigate(`/edit/${item.id}`, {
      state: { todos: item },
    });
  };

  return (
    <li className={style.item}>

      <span style={{ width: "50%" }}>
       <input type="checkbox" id="item.objectID" name="vehicle1" value="Bike"/>
       <label htmlFor="vehicle1">{item.title}</label>
      </span>

      <span style={{ width: "50%" }}>
        <button onClick={handleViewClick}>View</button>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={() => onRemoveTodo(item)}>
          <strong>X</strong>
        </button>
      </span>

    </li>
  );
};

export default TodoListItem;
