import React from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

const styles = {
  list: {
    width: '80%',
    maxWidth: '500px',
    margin: '20px auto 0',
    padding: 0
  }
};

class ToDoList extends React.Component {
   render() {
      return (
         <ul className="todo-list" style={styles.list}>
            {this.props.todos.map((todo, i) => {
            return <ToDoItems
               key={todo.id}
               todo={todo}
               index={i + 1}
            />;
            })}
         </ul>
      );
   }
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;