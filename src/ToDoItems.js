import React from 'react';

function ToDoItems({title, id}) {
return <li>{id}. {title}</li>;
}

export default ToDoItems;