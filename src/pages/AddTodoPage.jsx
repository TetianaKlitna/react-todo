import { Fragment } from "react";
import AddTodoForm from "../components/Container/AddTodo/AddTodoForm.jsx";
import useApi from "../hooks/useApi.jsx";

function AddTodoPage() {
  const { addedTodo, isLoading, isError, postData } = useApi();

  const handlePostTodo = (todo) => {
    postData(todo);
  };

  return (
    <Fragment>
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
