import React from 'react';

const AddToDoItem = props => {
  return (
    <form id="todo-form" action="" onSubmit={props.submitNewToDo}>
      <input id="todo-add" type="text" onChange={props.changeToDoInput} />
      <input type="submit" value="Add ToDo" />
    </form>
  );
};

export default AddToDoItem;