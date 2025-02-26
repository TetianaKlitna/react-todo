import { useLocation } from "react-router-dom";

import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";

const activeItemMenu = "view";

const isReadOnly = true;
const titleHeaderText = "View To-Do Details:";
const titleSubmitBtn = "Done";

function ViewTodoDetails() {
  const location = useLocation();
  const { todos } = location.state || {};

  if (!todos) {
    return <div>No Todo details found</div>;
  }

  return (
    <TodoForm
      from={activeItemMenu}
      initialTodo={todos}
      isReadOnly={isReadOnly}
      titleHeaderText={titleHeaderText}
      titleSubmitBtn={titleSubmitBtn}
    />
  );
}

export default ViewTodoDetails;
