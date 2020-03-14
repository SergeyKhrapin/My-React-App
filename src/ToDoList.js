import React from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

const ToDoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, i) => {
        return <ToDoItems
          key={todo.id}
          todo={todo}
          index={i + 1}
          onChangeToDO={props.onToggle}
          onDeleteToDo={props.onDelete}
        />;
      })}
    </ul>
  )
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;