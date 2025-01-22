import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./pages/TodoContainer";
import NotFoundPage from "./pages/NotFoundPage";
import ViewTodoDetails from "./pages/ViewTodoDetails";
import EditTodoItem from "./pages/EditTodoItem";

function App() {
  return (
    <div className="centered-div">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoContainer />} />
            <Route path="/new" element={<TodoContainer />} />
            <Route
              path="/view-todo-details/:id"
              element={<ViewTodoDetails />}
            />
            <Route
              path = "/edit/:id"
              element={<EditTodoItem/>}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
