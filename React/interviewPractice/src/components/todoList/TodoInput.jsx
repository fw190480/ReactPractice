import React,{useState} from 'react'

const TodoInput = () => {
    const [text,setText] = useState("")
  return (
    <div className='todo-input'>
        <input value={text} onChange={({target})=>setText(target.value)} type="text" placeholder='Enter todo here...' />
        <button>Add Todo</button>
    </div>
  )
}

export default TodoInput