import { useState, useEffect } from "react";
import { getTodos, deleteTodo, addTodo, updateTodo, doneTodo } from "../utils/api.jsx";

const useApi = () => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [addedTodo, setAddedTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState(null);

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
      setUpdatedTodo(updatedTodo);
      const newToDoList = todoList.map((item) => {
        if(item.id === updatedTodo.id){
          item.title = updatedTodo.title;
          item.priority = updatedTodo.priority;
          item.dueDate = updatedTodo.dueDate;
          item.description = updatedTodo.description;
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
  };

  const doneData = async (item) => {
    setIsLoading(true);
    try {
      const doneTodoItem = await doneTodo(item); 
      setUpdatedTodo(doneTodoItem);
      const newToDoList = todoList.map((item) => {
        if(item.id === doneTodoItem.id){
          item.completedAt = doneTodoItem.completedAt;
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
  };

  return { todoList, addedTodo, updatedTodo, doneData, isLoading, isError, fetchData, postData, deleteData, updateData};
};

export default useApi;
