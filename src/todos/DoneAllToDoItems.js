import React from 'react';
import ToDoContext from '../context';
import todoConstants from '../constants/todo';

const DoneAllToDoItems = () => {
   const context = React.useContext(ToDoContext);
   
   return (
      <div>
         <input id="doneAllToDo" type="checkbox" onChange={context.doneAllToDo} checked={context.areAllToDoDone}  />
         <label htmlFor="doneAllToDo">{context.areAllToDoDone ? todoConstants.undoAllToDos : todoConstants.doneAllToDos}</label>
      </div>
   );
}

export default DoneAllToDoItems;
