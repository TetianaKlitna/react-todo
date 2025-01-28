import { useNavigate, useLocation } from "react-router-dom";

function ViewTodoDetails() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { todos } = location.state || {};

  if (!todos) {
    return <div>No Todo details found</div>;
  }

  return (
    <div className="base-container">
      <div className="centered-text">
        <strong>Title:</strong>
        {todos.title}
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default ViewTodoDetails;
