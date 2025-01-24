import NavBar from "../components/NavBar/NavBar";
import TodoListContainer from "../components/Container/TodoListContainer";
import NotFoundPage from "./NotFoundPage";
import AddTodoPage from "./AddTodoPage";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    content = <AddTodoPage />;
  } else {
    content = <NotFoundPage />;
  }

  return (
    <div className="bg-app">
      <div className="app-container">
        <Header />
        <div className="main-container">
          <NavBar
            activeItemMenu={activeItemMenu}
            onClickItemMenu={onClickItemMenu}
          />
          {content}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
