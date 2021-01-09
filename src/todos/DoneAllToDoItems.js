import React from 'react';
import ToDoContext from '../context';

const DoneAllToDoItems = () => {
   const context = React.useContext(ToDoContext);
   
   return (
      <div>
         <input id="doneAllToDo" type="checkbox" onChange={context.doneAllToDo} checked={context.areAllToDoDone}  />
         <label htmlFor="doneAllToDo">{context.areAllToDoDone ? 'Undo all' : 'Done all'}</label>
      </div>
   );
}

export default DoneAllToDoItems;
