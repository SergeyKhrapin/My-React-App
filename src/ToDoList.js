import React from 'react';
import ToDoItems from './ToDoItems';

function ToDoList({todos}) {
    return (
        <ul>
            {todos.map(todo => {
                return <ToDoItems title={todo.title} />;
            })}
        </ul>
    )
}

export default ToDoList;