const TodoListItem = (props) => {
  const item = props.item;

  return (
            <li>
            {item.title}
            </li>
          );
};

export default TodoListItem;
