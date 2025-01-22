import { Fragment } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TodoPage from "./TodoPage";
import AddTodoPage from "./AddTodoPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TodoContainer() {
  const [activeItemMenu, setActiveItemMenu] = useState("home");
  const navigate = useNavigate();

  const onClickItemMenu = (state, path) => {
    setActiveItemMenu(state);
    navigate(path);
  };

  return (
    <Fragment>
      <NavBar
        activeItemMenu={activeItemMenu}
        onClickItemMenu={onClickItemMenu}
      />
      <Header />
      {activeItemMenu === "home" ? <TodoPage /> : <AddTodoPage />}
    </Fragment>
  );
}

export default TodoContainer;
