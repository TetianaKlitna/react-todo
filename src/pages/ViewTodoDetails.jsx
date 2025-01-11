import { useNavigate, useLocation } from "react-router-dom";

function ViewTodoDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { todos } = location.state || {}; // Extract the user from state

  if (!todos) {
    return <div>No Todo details found</div>;
  }

  return (
    <div>
      <p>
        <strong>Id:</strong>
        {todos.id}
      </p>
      <p>
        <strong>Title:</strong>
        {todos.title}
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ViewTodoDetails;
