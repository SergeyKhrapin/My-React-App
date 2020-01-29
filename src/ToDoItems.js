import React from 'react';

function ToDoItems({title, index}) {
    return <li>{index}. {title}</li>;
}

export default ToDoItems;