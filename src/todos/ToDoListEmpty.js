import React from 'react';

class ToDoListEmpty extends React.Component {
   render() {
      return (
         <h5>
            <p>It seems, you have no any todos.</p>
            <span>Hooray :)</span>
         </h5>
      );
   }
}

export default ToDoListEmpty;