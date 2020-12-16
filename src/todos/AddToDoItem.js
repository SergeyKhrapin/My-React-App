import React from 'react';

class AddToDoItem extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      console.log('render AddToDoItem');
      return (
         <form id="todo-form" action="" onSubmit={this.props.submitNewToDo}>
            <input
               id="todo-add"
               type="text"
               value={this.props.value}
               onChange={this.props.changeToDoInput} />
            <input type="submit" value="Add ToDo" />
         </form>
      );
   }
}

export default AddToDoItem;
