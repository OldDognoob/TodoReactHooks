import React from 'react'

const TodosApp = ({todos, setTodos}) => {
    return (
        // map throughout the todo item and display it to the screen
        
    <div>
        {todos.map((todo)=>(
            <li className="todo-app" key={todo.id}>
                <input
                type="text"
                value={todo.title}
                className="app"
                onChange={(event)=>event.preventDefault()}
                />
            </li>
        ))}
    </div>)
}

export default TodosApp;
