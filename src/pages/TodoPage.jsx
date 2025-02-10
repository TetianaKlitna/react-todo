import Header from "../components/Header/Header";
import TodoContainer from "../components/Container/TodoContainer";
import Footer from "../components/Footer/Footer";

const activeItemMenu = "home";

function TodoPage() {

  return (
    <div className="base-container plain-border">
      <Header className="header"
        activeItemMenu={activeItemMenu}
      />
      <div className="content">
      <TodoContainer />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default TodoPage;
