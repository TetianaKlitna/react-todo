import { useLocation } from "react-router-dom";

import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

const activeItemMenu = "edit";

const titleHeaderText = "Edit To-Do Details:";
const titleSubmitBtn = "Save";

function EditTodoDetails() {
  const location = useLocation();
  const { todos } = location.state || {};

  if (!todos) {
    return <NotFoundPage />;
  }

  return (
    <TodoForm
      from={activeItemMenu}
      initialTodo={todos}
      titleHeaderText={titleHeaderText}
      titleSubmitBtn={titleSubmitBtn}
    />
  );
}

export default EditTodoDetails;
