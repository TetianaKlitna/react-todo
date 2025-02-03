import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";

const activeItemMenu = "view";

const isReadOnly = true;
const titleText = "View To-Do Details:";
const titleSubmitBtn = "Done";

function ViewTodoDetails() {
  const location = useLocation();
  const { todos } = location.state || {};

  if (!todos) {
    return <div>No Todo details found</div>;
  }

  return (
    <div className="base-container">
      <Header className="header" />
      <div className="content">
        <TodoForm
          from={activeItemMenu}
          initialTodo={todos}
          isReadOnly={isReadOnly}
          titleText={titleText}
          titleSubmitBtn={titleSubmitBtn}
        />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default ViewTodoDetails;
