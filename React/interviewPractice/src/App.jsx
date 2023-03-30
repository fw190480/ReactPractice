import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Timer from './components/Timer'
import CounterClass from './components/CounterClassComponent'
import Practice from './components/Practice'
import ScrollByUseRef from './components/ScrollByUseRef'
import TypingTest from './components/TypingTest';
import Todo from "./components/todoList/Todo"

function App() {

  return (
    <div className='center'>
      {/* <Practice /> */}
      {/* <Timer /> */}
      {/* <ScrollByUseRef /> */}
      {/* <TypingTest /> */}
      <Todo />
    </div>
  )
}

export default App
