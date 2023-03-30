import React,{useContext} from 'react'
import { TodoContext } from './contex/todoContex';

const TodoResult = () => {
    const {todos} = useContext(TodoContext)
  return (
    <div className='todoResult'>Done 
        <span>
            {
               ( todos.filter(item=>item.isChecked)).length.toString()
            }
        </span>
    </div>
  )
}

export default TodoResult