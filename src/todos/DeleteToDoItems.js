import React from 'react';
import ToDoContext from '../context';
import todoConstants from '../constants/todo';

const DeleteToDoItems = () => {
   const {toDoTypeToDelete, deleteToDoItems} = React.useContext(ToDoContext);

   return (
      <div>
         <select value={toDoTypeToDelete} onChange={deleteToDoItems}>
            <option>{todoConstants.deleteAllToDos}</option>
            <option>{todoConstants.deleteCompletedToDos}</option>
            <option>{todoConstants.deleteUncompletedToDos}</option>
         </select>
      </div>
   );
}

export default DeleteToDoItems;
