import React from 'react';
import ToDoContext from '../context';
import todoConstants from '../constants/todo';

const DeleteToDoItems = () => {
   const context = React.useContext(ToDoContext);

   return (
      <div>
         <button onClick={context.deleteAllToDo}>{todoConstants.deleteAllToDos}</button>
      </div>
   );
}

export default DeleteToDoItems;
