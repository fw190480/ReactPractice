import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Timer from './components/Timer'
import CounterClass from './components/CounterClassComponent'
import Practice from './components/Practice'
import ScrollByUseRef from './components/ScrollByUseRef'

function App() {

  return (
    <div className='center'>
      {/* <Practice /> */}
      {/* <Timer /> */}
      <ScrollByUseRef />
    </div>
  )
}

export default App
