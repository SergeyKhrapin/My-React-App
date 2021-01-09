import React from 'react';
import ToDoContext from '../context';
import todoConstants from '../constants/todo';

const DeleteToDoItems = () => {
   const context = React.useContext(ToDoContext);

   return (
      <div>
         <select value={context.toDoTypeToDelete} onChange={context.deleteToDoItems}>
            <option>{todoConstants.deleteAllToDos}</option>
            <option>{todoConstants.deleteCompletedToDos}</option>
            <option>{todoConstants.deleteUncompletedToDos}</option>
         </select>
      </div>
   );
}

export default DeleteToDoItems;
