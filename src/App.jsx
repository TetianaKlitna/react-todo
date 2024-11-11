import "./App.css";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

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
