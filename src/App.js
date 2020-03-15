import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';
import ToDoContext from './context';

const App = props => {
  /* ToDo logic - START */
  let [state, setState] = React.useState([
    {id: 1, completed: true, title: 'React learning'},
    {id: 2, completed: false, title: 'Workout'},
    {id: 3, completed: false, title: 'Swimming'}
  ]);

  const doneToDo = id => {
    setState(state.map(el => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    }));
  };

  const deleteToDo = id => {
    setState(state.filter(el => el.id !== id));
  };
  /* ToDo logic - END */

  /* Comments logic - START */
  const commentsAmount = [1, 2, 3];
  /* Comments logic - END */

  /* Seasons logic - START */
  const currentMonth = new Date().getMonth();
  const isBetweenMarchAndOctober = currentMonth >= 2 && currentMonth <= 9;
  let isNorthernHemisphere, isWinter;

  const promise = new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(pos => {
      const latitude = pos.coords.latitude;
      isNorthernHemisphere = latitude > 0 && latitude < 90;
      isWinter = isNorthernHemisphere && !isBetweenMarchAndOctober || !isNorthernHemisphere && isBetweenMarchAndOctober;
      resolve(isWinter);
    });
  });

  promise.then(
    result => {
      console.log(result);
    }
  )
  /* Seasons logic - END */

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.time.toLocaleTimeString()}</h1>
        <ToDoContext.Provider value={{doneToDo, deleteToDo}}>
          <ToDoList todos={state} />
        </ToDoContext.Provider>
      </header>

      <div className="Comment">
        {commentsAmount.map(() => <CommentCard><CommentDetails /></CommentCard>)}
      </div>

      <div className="seasons">
        <Seasons isWinter={isWinter} />
      </div>
    </div>
  );
};

export default App;
