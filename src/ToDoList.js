import React from 'react';
import ToDoItems from './ToDoItems';

function ToDoList(props) {
    return (
        <ul>
            {props.todos.map(todo => {
                return <ToDoItems todo={todo} />;
            })}
        </ul>
    )
}

export default ToDoList;