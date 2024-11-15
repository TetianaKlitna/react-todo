const AddTodoForm = (props) => {

  const handleAddTodo = (e) => {
       e.preventDefault();
       const todoTitle = e.target.title.value; 
       console.log(todoTitle);
       props.onAddTodo(todoTitle);
       e.target.reset();
  };

  return (
    <form onSubmit = {handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" name = 'title' type="text" />
      <button type="submit" id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
