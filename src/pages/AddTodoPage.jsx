import { Fragment } from "react";
import AddTodoForm from "../components/AddTodoForm.jsx";
import useApi from "../hooks/useApi.jsx";

function AddTodoPage() {
  const { addedTodo, isLoading, isError, postData } = useApi();

  const handlePostTodo = (todo) => {
    postData(todo);
  };

  return (
    <Fragment>
      <p>Do you want to add something to your to-do list?</p>
      <AddTodoForm onPostItem={handlePostTodo} />
      {isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : isError ? (
        <p>Something goes wrong...</p>
      ) : (
        addedTodo && (
          <p>Succesfully added record with title: {addedTodo.title}!</p>
        )
      )}
    </Fragment>
  );
}

export default AddTodoPage;
