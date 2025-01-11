import { Fragment } from "react";
import AddTodoForm from "../components/AddTodoForm.jsx";
import useApi from "../hooks/useApi.jsx";

function AddTodoPage(){

    const { addedTodo, isLoading, isError, postData } = useApi();

    const handlePostTodo = (todo) => {
        postData(todo);
    };

    if (isError) {
        return (
          <div>
            <strong>Something goes wrong...</strong>
          </div>
        );
    }

    return (
      <Fragment>
      <h1>Add Todo</h1>
      <p>Do you want to add something to your to-do list?</p>
      <AddTodoForm onPostItem={handlePostTodo} /> 
      {isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : (
        addedTodo&&<p>Succesfully added record with title: {addedTodo.title}!</p>
      )}
      </Fragment>
    );
}

export default AddTodoPage;