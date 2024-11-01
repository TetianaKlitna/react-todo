import './App.css'
import { todoList } from './constants/todoList';

function App() {
  return (
      <div>
        <h1>Todo List</h1>
        <ul>
           {todoList.map(item => <li key = {item.id}>{item.title}</li>)}
        </ul>
      </div> 
  )
}

export default App