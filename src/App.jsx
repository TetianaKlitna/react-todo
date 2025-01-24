import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewTodoDetails from "./pages/ViewTodoDetails";

function App() {
  return (
    <div className="centered-div">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/new" element={<TodoPage />} />
            <Route
              path="/view-todo-details/:id"
              element={<ViewTodoDetails />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
