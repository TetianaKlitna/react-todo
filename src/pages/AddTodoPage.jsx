import TodoForm from "../components/Container/TodoForm/TodoForm.jsx";

const activeItemMenu = "add";
const titleHeaderText = "Would you like to add a To-Do?";
const titleSubmitBtn = "Add";

function AddTodoPage() {
  return (
    <TodoForm
      from={activeItemMenu}
      titleHeaderText={titleHeaderText}
      titleSubmitBtn={titleSubmitBtn}
    />
  );
}

export default AddTodoPage;
