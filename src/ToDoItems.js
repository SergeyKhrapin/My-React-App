import React from 'react';
import PropTypes from 'prop-types';
import ToDoContext from './context';

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: '5px 10px',
    border: '1px solid #fff',
    borderRadius: 8,
    listStyle: 'none',
  },
  index: {
    margin: '0 6px 0 10px',
  },
  deleteButton: {
    background: 'red',
    border: 'none',
    cursor: 'pointer',
  },
};

const ToDoItems = props => {
  const { doneToDo, deleteToDo } = React.useContext(ToDoContext);

  const liClassName = `todo-item todo-item-${props.index}`;
  const titleClassName = `todo-item__title ${props.todo.completed && 'done'}`;

  return (
    <li className={liClassName} style={styles.item}>
      <span>
        <input type="checkbox" onChange={() => doneToDo(props.todo.id)} checked={props.todo.completed} />
        <strong style={styles.index}>{props.index}.</strong>
        <span className={titleClassName}>{props.todo.title}</span>
      </span>
      <button className="todo-item__delete" onClick={() => deleteToDo(props.todo.id)} style={styles.deleteButton}>&times;</button>
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