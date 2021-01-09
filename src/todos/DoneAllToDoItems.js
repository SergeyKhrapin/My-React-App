import React from 'react';
import ToDoContext from '../context';
import todoConstants from '../constants/todo';

const DoneAllToDoItems = () => {
   const {doneAllToDo, areAllToDoDone} = React.useContext(ToDoContext);
   
   return (
      <div>
         <input id="doneAllToDo" type="checkbox" onChange={doneAllToDo} checked={areAllToDoDone}  />
         <label htmlFor="doneAllToDo">{areAllToDoDone ? todoConstants.undoAllToDos : todoConstants.doneAllToDos}</label>
      </div>
   );
}

export default DoneAllToDoItems;
