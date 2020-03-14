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

const ToDoItems = ({todo, index, onChangeToDO}) => {
  console.log('todo ', todo);
  const liClassName = `todo-item todo-item-${index}`;
  const titleClassName = `todo-item__title ${todo.completed && 'done'}`;

  return (
    <li className={liClassName} style={styles.item}>
      <span>
        <input type="checkbox" onChange={()=> onChangeToDO(todo.id)} checked={todo.completed} />
        <strong style={styles.index}>{index}.</strong>
        <span className={titleClassName}>{todo.title}</span>
      </span>
      <button className="todo-item__delete" style={styles.deleteButton}>&times;</button>
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