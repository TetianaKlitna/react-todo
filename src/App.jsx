import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import NoPage from "./pages/NoPage";
import AddTodoPage from "./pages/AddTodoPage";
import ViewTodoDetails from "./pages/ViewTodoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/new" element={<AddTodoPage />} />
        <Route path="/view-todo-details/:id" element={<ViewTodoDetails />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
