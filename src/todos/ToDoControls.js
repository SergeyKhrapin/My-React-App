import React from 'react';
import DoneAllToDoItems from './DoneAllToDoItems';
import DeleteToDoItems from './DeleteToDoItems';

const ToDoControls = () => {
    return (
        <div className="todo-section--control-buttons">
            <DoneAllToDoItems />
            <DeleteToDoItems />
        </div>
    );
}

export default ToDoControls;
