import styles from "./TodoForm.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputWithLabel from "../Input/InputWithLabel";
import TextareaWithLabel from "../Textarea/TextareaWithLabel";
import Loader from "../../Loader/Loader";

import useApi from "../../../hooks/useApi";

const TodoForm = ({
  from,
  initialTodo = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    completedAt: "",
  },
  isReadOnly = false,
  titleHeaderText,
  titleSubmitBtn,
}) => {
  const [todo, setTodo] = useState(initialTodo);
  const { addedTodo, updatedTodo, 
          postData, updateData, 
          isLoading, isError } = useApi();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newTodo = {
      ...todo,
      [name]: value,
    };
    setTodo(newTodo);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(from === "add"){
      postData(todo);
    }else if(from === "view" && !todo.completedAt){
      updateData(todo);
    }
    if (!isReadOnly) {
      setTodo({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
      });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <ul className={clsx(styles["todo-form-items"], "no-style-list")}>
        <li className="center-flex">
          <strong>{titleHeaderText}</strong>
        </li>
        <li>
          <InputWithLabel
            id="todoTitle"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
            isReadOnly={isReadOnly}
          >
            Title:
          </InputWithLabel>
        </li>
        <li>
          <InputWithLabel
            id="todoPriority"
            name="priority"
            value={todo.priority}
            onChange={handleInputChange}
            list="priory-list"
            isReadOnly={isReadOnly}
          >
            Priority:
          </InputWithLabel>
          <datalist id="priory-list">
            <option value="Low" />
            <option value="Medium" />
            <option value="High" />
          </datalist>
          <InputWithLabel
            id="todoDueDate"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleInputChange}
            type="date"
            isReadOnly={isReadOnly}
          >
            Due Date:
          </InputWithLabel>
        </li>
        <li>
          <TextareaWithLabel
            id="todoDescription"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
            rows={10}
            isReadOnly={isReadOnly}
          >
            Description:
          </TextareaWithLabel>
        </li>
        <li>
          <button
            className={clsx(
              styles["btn"],
              isReadOnly && (todo.completedAt || updatedTodo)
                ? "standard-button-disabled"
                : "standard-button",
              "center-flex",
              "plain-border"
            )}
            type="submit"
            id="submitButton"
            disabled={isReadOnly && (todo.completedAt || updatedTodo)}
          >
            {titleSubmitBtn}
          </button>
          <button
            className={clsx(styles["btn"], "standard-button", "center-flex")}
            type="button"
            id="closeButton"
            onClick={() => navigate("/")}
          >
            Close
          </button>
        </li>
      </ul>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        addedTodo && (
          <p>Succesfully added record with title: {addedTodo.title}!</p>
        ) ||
        updatedTodo &&(
          <p>Succesfully updated record with title: {updatedTodo.title}!</p>
        )
      )}
    </form>
  );
};

TodoForm.propTypes = {
  from : PropTypes.string,
  initialTodo: PropTypes.object,
  isReadOnly: PropTypes.bool,
  titleText: PropTypes.string,
  titleSubmitBtn: PropTypes.string,
};

export default TodoForm;
