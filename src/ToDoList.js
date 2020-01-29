import React from 'react';
import PropTypes from 'prop-types';
import ToDoItems from './ToDoItems';

function ToDoList({todos}) {
    const style = {
        listStyle: 'none',
    };

    return (
        <ul style={style}>
            {todos.map((todo, i) => {
                return <ToDoItems key={todo.id} title={todo.title} index={i + 1}/>;
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.array
};

export default ToDoList;