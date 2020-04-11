import React from 'react';

class DoneAllToDoItem extends React.Component {
   render() {
      return (
         <div>
            <input type="checkbox" onChange={this.props.doneAllToDo} checked={this.props.areAllToDoDone ? true : false}  />
            <span>{this.props.areAllToDoDone ? 'Undo all' : 'Done all'}</span>
         </div>
      );
   }
}

export default DoneAllToDoItem;