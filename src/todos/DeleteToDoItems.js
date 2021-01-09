import React from 'react';
import ToDoContext from '../context';

const DeleteToDoItems = () => {
   const context = React.useContext(ToDoContext);

   return (
      <div>
         <button onClick={context.deleteAllToDo}>Delete all</button>
      </div>
   );
}

export default DeleteToDoItems;
