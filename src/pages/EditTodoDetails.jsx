import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";

const activeItemMenu = "edit";

const titleHeaderText = "Edit To-Do Details:";
const titleSubmitBtn = "Save";

function EditTodoDetails() {
  const location = useLocation();
  const { todos } = location.state || {};

  if (!todos) {
    return <div>No Todo details found</div>;
  }

  return (
    <div className="base-container plain-border">
      <Header className="header" />
      <div className="content">
        <TodoForm
          from={activeItemMenu}
          initialTodo={todos}
          titleHeaderText={titleHeaderText}
          titleSubmitBtn={titleSubmitBtn}
        />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default EditTodoDetails;
