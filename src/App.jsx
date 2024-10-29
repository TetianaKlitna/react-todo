import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
           {
            todoList.map(item => {
                                   return <li id = {item.id}>{item.title}</li>
                                 }
            )
           }
        </ul>
      </div> 
  )
}

export default App
