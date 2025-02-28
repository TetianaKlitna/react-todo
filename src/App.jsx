import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewTodoDetails from "./pages/ViewTodoDetails";
import EditTodoDetails from "./pages/EditTodoDetails";
import AddTodoPage from "./pages/AddTodoPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter basename="/react-todo">
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<TodoPage />} />
          <Route path="new" element={<AddTodoPage />} />
          <Route path="view-todo-details/:id" element={<ViewTodoDetails />} />
          <Route path="edit-todo-details/:id" element={<EditTodoDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
