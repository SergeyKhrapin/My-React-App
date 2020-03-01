import React from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

const ToDoList = ({todos, onToggle}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, i) => {
                return <ToDoItems
                          key={todo.id}
                          todo={todo}
                          index={i + 1}
                          onChangeToDO={onToggle}
                        />;
            })}
        </ul>
    )
};

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;