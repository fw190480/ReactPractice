import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from "./components/todoList/Todo"
import Pagenation from './components/pagenation/Pagenation'

function App() {

  return (
    <div className='center'>
      {/* <Practice /> */}
      {/* <Timer /> */}
      {/* <ScrollByUseRef /> */}
      {/* <TypingTest /> */}
      {/* <Todo /> */}
      <Pagenation />
    </div>
  )
}

export default App
