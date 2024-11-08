const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" type="text" />
      <button type="button" id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
