import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NavBar from "../components/NavBar/NavBar";
import TodoListContainer from "../components/Container/TodoListContainer";
import AddTodoForm from "../components/Container/AddTodo/AddTodoForm";
import NotFoundPage from "./NotFoundPage";
import Footer from "../components/Footer/Footer";

function TodoPage() {
  const [activeItemMenu, setActiveItemMenu] = useState("home");
  const navigate = useNavigate();

  const onClickItemMenu = (state, path) => {
    setActiveItemMenu(state);
    navigate(path);
  };

  let content;

  if (activeItemMenu === "home") {
    content = <TodoListContainer />;
  } else if (activeItemMenu === "add") {
    content = <AddTodoForm />;
  } else {
    content = <NotFoundPage />;
  }

  return (
    <div className="base-container">
      <NavBar className="header"
        activeItemMenu={activeItemMenu}
        onClickItemMenu={onClickItemMenu}
      />
      <div className="content">
        {content}
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default TodoPage;
