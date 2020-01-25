import React from 'react';
import ToDoItems from './ToDoItems';

function ToDoList({todos}) {
    return (
        <ul>
            {todos.map(todo => {
                return <ToDoItems key={todo.id} title={todo.title} id={todo.id}/>;
            })}
        </ul>
    )
}

export default ToDoList;