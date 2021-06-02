import React from 'react'

const TodosList = ({todos, setTodos}) => {
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id));
    }
    return (
        // map throughout the todo item and display it to the screen
        
    <div>
        {todos.map((todo)=>(
            <li className="todo-list" key={todo.id}>
                <input
                type="text"
                value={todo.title}
                className="list"
                onChange={(event)=>event.preventDefault()}
                />
                <div>
                    <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-edit task-button">
                        <i className="fa fa-check-edit"></i>
                    </button>
                    <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                        <i className="fa fa-check-trash"></i>
                    </button>
                </div>
            </li>


        ))}
    </div>)
}

export default TodosList;
