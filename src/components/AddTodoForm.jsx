import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({ id: Date.now(), title: todoTitle });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        id="todoTitle"
        name="title"
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit" id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
