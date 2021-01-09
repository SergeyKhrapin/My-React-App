import React from 'react';
import todoConstants from '../constants/todo';

class ToDoListEmpty extends React.Component {
   render() {
      return (
         <h5>
            <p>{todoConstants.toDoAbsentMessage}</p>
         </h5>
      );
   }
}

export default ToDoListEmpty;