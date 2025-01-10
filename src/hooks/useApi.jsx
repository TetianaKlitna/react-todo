import { useState, useEffect } from "react";
import { getTodos, deleteTodo, addTodo } from "../utils/api.jsx";

const useApi = () => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {   
    setIsLoading(true);
    try {
      const loadedTodoList = await getTodos();
      setTodoList(loadedTodoList);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const postData = async (item) => {
    setIsLoading(true);
    try {
      const addedTodo = await addTodo(item); 
      const newTodoList = [...todoList, addedTodo];
      setTodoList(newTodoList);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteData = async (item) => {
    setIsLoading(true);
    try {
      const deletedIds = await deleteTodo(item); 
      const newToDoList = todoList.filter((item) => !deletedIds.includes(item.id));
      setTodoList(newToDoList);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };


  return { todoList, isLoading, isError, fetchData, postData, deleteData};
};

export default useApi;
