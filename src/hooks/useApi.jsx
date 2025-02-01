import { useState, useEffect } from "react";
import { getTodos, deleteTodo, addTodo, updateTodo } from "../utils/api.jsx";

const useApi = () => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [addedTodo, setAddedTodo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {   
    setIsLoading(true);
    try {
      const loadedTodoList = await getTodos();
      setTodoList(loadedTodoList);
      setIsError(false);
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
      setAddedTodo(addedTodo);
      const newTodoList = [...todoList, addedTodo];
      setTodoList(newTodoList);
      setIsError(false);
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
      setIsError(false);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updateData = async (item) => {
    setIsLoading(true);
    try {
      const updatedTodo = await updateTodo(item); 
      const newToDoList = todoList.map((item) => {
        if(item.id === updatedTodo.id){
          item.completedAt = updatedTodo.completedAt;
        }
        return item;
      });
      setTodoList(newToDoList);
      setIsError(false);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return { todoList, addedTodo, isLoading, isError, fetchData, postData, deleteData, updateData};
};

export default useApi;
