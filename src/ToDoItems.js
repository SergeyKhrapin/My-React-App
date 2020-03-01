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
  const className = `todo-item todo-item-${index}`;
  
  return (
    <li className={className} style={styles.item}>
      <span>
        <input type="checkbox" onChange={()=> onChangeToDO(todo.id)} />
        <strong style={styles.index}>{index}.</strong>
        <span className="todo-item__title">{todo.title}</span>
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