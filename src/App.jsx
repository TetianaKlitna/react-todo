import './App.css'

const todoList = [
  {
    id: 1,
    title: "Start assignment"
  }, 
  {
    id: 2,
    title: "Run assignment"
  }, 
  {
    id: 3,
    title: "Complete assignment"    
  }
];

function App() {
  return (
      <div>
        <h1>Todo List</h1>
        <ul>
           {todoList.map(item => <li key = {item.objectId}>{item.title}</li>)}
        </ul>
      </div> 
  )
}

export default App
