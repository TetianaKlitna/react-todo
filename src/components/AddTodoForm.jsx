import { useState, useRef } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef();

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = todoTitle.trim();
    if (title) {
      onAddTodo({ id: Date.now(), title: title });
      setTodoTitle("");
    } else {
      alert("Fill out title field");
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
   
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        inputRef = {inputRef}
        id="todoTitle"
        name="title"
        value={todoTitle}
        isFocused = "true"
        onInputChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button type="submit" id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
