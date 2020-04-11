import React from 'react';

class DeleteAllToDoItem extends React.Component {
   render() {
      return (
         <div>
            <button onClick={this.props.deleteAllToDo}>Delete all</button>
         </div>
      );
   }
}

export default DeleteAllToDoItem;