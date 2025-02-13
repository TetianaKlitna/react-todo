import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewTodoDetails from "./pages/ViewTodoDetails";
import EditTodoDetails from "./pages/EditTodoDetails";
import AddTodoPage from "./pages/AddTodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-todo" element={<TodoPage />} />
        <Route path="/react-todo/new" element={<AddTodoPage />} />
        <Route path="/react-todo/view-todo-details/:id" element={<ViewTodoDetails />} />
        <Route path="/react-todo/edit-todo-details/:id" element={<EditTodoDetails />} />
        <Route path="/react-todo/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
