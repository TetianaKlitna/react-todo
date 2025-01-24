import { useState, useRef } from "react";
import InputWithLabel from "../General/InputWithLabel";

const AddTodoForm = ({ onPostItem }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const isFocused = true;
  const ref = useRef(null);

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = todoTitle.trim();
    if (title) {
      onPostItem({ id: Date.now(), title: title });
      setTodoTitle("");
      ref.current.focus();
    } else {
      alert("Fill out title field");
    }
  };

  return (
    <form onSubmit={handleAddTodo} >
    {/* <p>Do you want to add something to your to-do list?</p> */}
      <InputWithLabel
        ref={ref}
        id="todoTitle"
        name="title"
        value={todoTitle}
        onInputChange={handleTitleChange}
        isFocused={isFocused}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <div>
      <button type="submit" id="submitButton">
        Submit
      </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
