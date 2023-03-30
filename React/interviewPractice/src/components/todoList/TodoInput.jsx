import React,{useState,useContext} from 'react'
import { TodoContext } from './contex/todoContex';

const TodoInput = () => {
    const [text,setText] = useState("");
    const {todos,setTodos} = useContext(TodoContext);

    const addTodo = ()=>{
        let newTodo = {
            id:Date.now()+Math.random(),
            isChecked:false,
            title:text
        };
        setTodos(
            [...todos,newTodo]
        );

        setText('')
    };

    const handleEnterClick = (e)=>{
        // console.log(e.keyCode)
        if(e.keyCode===13){
            addTodo()
        }
    }
  return (
    <div className='todo-input'>
        <input onKeyUp={handleEnterClick} value={text} onChange={({target})=>setText(target.value)} type="text" placeholder='Enter todo here...' />
        <button onClick={addTodo} >Add Todo</button>
    </div>
  )
}

export default TodoInput