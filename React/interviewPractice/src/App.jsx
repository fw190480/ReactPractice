import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Timer from './components/Timer'
import CounterClass from './components/CounterClassComponent'

function App() {

  return (
    <div className='center'>
      <CounterClass />
      {/* <Timer /> */}
    </div>
  )
}

export default App
