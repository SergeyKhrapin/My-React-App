import React from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

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
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;