import { useState, useRef } from "react";
import InputWithLabel from "../Input/InputWithLabel";
import Loader from "../Loader/Loader";
import styles from "./AddTodoForm.module.css";
import useApi from "../../../hooks/useApi.jsx";

const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { addedTodo, isLoading, isError, postData } = useApi();

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
      postData({ id: Date.now(), title: title });
      setTodoTitle("");
      ref.current.focus();
    } else {
      alert("Fill out title field");
    }
  };

  return (
    <form className={styles["add-form"]} onSubmit={handleAddTodo}>
      <div>Would you like to add a To-Do?</div>
      <div>
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

        <button className={styles["btn"]} type="submit" id="submitButton">
          Submit
        </button>
      </div>

      {isLoading ? (
       < Loader />
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        addedTodo && (
          <p>Succesfully added record with title: {addedTodo.title}!</p>
        )
      )}
    </form>
  );
};

export default AddTodoForm;
