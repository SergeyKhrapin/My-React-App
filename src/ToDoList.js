import React from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

function ToDoList({todos}) {
    return (
        <ul className="todo-list">
            {todos.map((todo, i) => {
                return <ToDoItems key={todo.id} title={todo.title} index={i + 1}/>;
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;