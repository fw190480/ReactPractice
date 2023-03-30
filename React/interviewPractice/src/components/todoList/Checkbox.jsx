import React from 'react'

const Checkbox = ({ todo, toggleCheckBox,deleteTodo }) => {
    // console.log(todo, 'inside checkbox')
    return (
        <div style={{display:"flex",gap:"1rem"}}>
            <div className='todoList-item'
            onClick={()=>toggleCheckBox(todo.id)}
            >
                <input readOnly checked={todo.isChecked} type={"checkbox"} />
                <span className={todo.isChecked ? "line-through" : ""}>{todo.title}</span>
            </div>
            <button onClick={()=>deleteTodo(todo.id)} >X</button>
        </div>
    )
}

export default Checkbox