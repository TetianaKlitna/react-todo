import "./App.css";
import TodoList from "./elements/TodoList.jsx";
import AddTodoForm from "./elements/AddTodoForm.jsx";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
