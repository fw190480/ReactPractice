import React, { useContext } from 'react'
import Checkbox from './Checkbox';
import { TodoContext } from './contex/todoContex';

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const toggleCheckBox = (id)=>{
        let updatedList = todos.map((item)=>{
            if(item.id==id){
                return {
                    ...item,
                    isChecked:!item.isChecked
                }
            }else return item
        });
        setTodos(updatedList)
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter(item=>item.id!=id))
    }
    // console.log(todos)

    return (
        <div>
            <h2>Things To Do:</h2>
            {
                todos.length ? (
                    <div className='todoList-container'>
                        {
                            todos.map((todo) => <Checkbox 
                            key={todo.id} 
                            toggleCheckBox={toggleCheckBox} 
                            deleteTodo={deleteTodo}
                            todo={todo} />)
                        }
                    </div>
                ) : <p>looks like you free today</p>
            }

        </div>
    )
}

export default TodoList