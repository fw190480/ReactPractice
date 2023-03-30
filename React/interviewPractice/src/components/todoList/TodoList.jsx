import React, { useContext } from 'react'
import { TodoContext } from './contex/todoContex';

const TodoList = () => {
    const {todos,setTodos} = useContext(TodoContext);

  return (
    <div>
        
    </div>
  )
}

export default TodoList