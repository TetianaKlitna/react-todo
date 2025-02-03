import Header from "../components/Header/Header";
import TodoListContainer from "../components/Container/TodoListContainer";
import Footer from "../components/Footer/Footer";

const activeItemMenu = "home";

function TodoPage() {

  return (
    <div className="base-container">
      <Header className="header"
        activeItemMenu={activeItemMenu}
      />
      <div className="content">
      <TodoListContainer />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default TodoPage;
