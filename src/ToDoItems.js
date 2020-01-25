import React from 'react';

function ToDoItems(props) {
    return <li>{props.todo.title}</li>;
}

export default ToDoItems;