import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const activeItemMenu = "add";
const titleHeaderText = "Would you like to add a To-Do?";
const titleSubmitBtn = "Add To-Do";

function AddTodoPage() {

  return (
    <div className="base-container">
      <Header className="header" activeItemMenu={activeItemMenu} />
      <div className="content">
        <TodoForm
          from={activeItemMenu}
          titleHeaderText={titleHeaderText}
          titleSubmitBtn={titleSubmitBtn}
        />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default AddTodoPage;
