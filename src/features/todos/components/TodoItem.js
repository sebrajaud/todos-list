import React from 'react';


const TodoItem = ({ todo, fetchDeleteTodo, fetchToggleTodo }) => {
    
    return(
        <li onClick={ fetchToggleTodo }  className="list-group-item d-flex flex-row justify-content-between align-items-center">
            <span>{ todo.name }</span>
            <span>
                <input className="mx-3" type="checkbox" checked={todo.done} onChange={() => {}} />
                <button className="btn btn-sm btn-danger" onClick={ (e) => { e.stopPropagation(); fetchDeleteTodo() }  }>Delete</button>
            </span>
        </li>
    )

}

export default TodoItem;
