import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: '10px 10px',
    border: '1px solid #fff',
    borderRadius: 8,
    listStyle: 'none',
  },
  index: {
    margin: '0 6px 0 10px',
  },
  deleteButton: {
    background: 'red',
    border: 'none'
  },
};

const ToDoItems = props => {
  console.log('todo ', props.todo);
  const liClassName = `todo-item todo-item-${props.index}`;
  const titleClassName = `todo-item__title ${props.todo.completed && 'done'}`;

  return (
    <li className={liClassName} style={styles.item}>
      <span>
        <input type="checkbox" onChange={() => props.onChangeToDO(props.todo.id)} checked={props.todo.completed} />
        <strong style={styles.index}>{props.index}.</strong>
        <span className={titleClassName}>{props.todo.title}</span>
      </span>
      <button className="todo-item__delete" onClick={() => props.onDeleteToDo(props.todo.id)} style={styles.deleteButton}>&times;</button>
    </li>
  )
};

ToDoItems.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string
};

ToDoItems.defaultProps = {
  title: `ToDo`
};

export default ToDoItems;