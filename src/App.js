import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';

const App = props => {
  let todos = [
    {id: 1, completed: false, title: 'React learning'},
    {id: 2, completed: false, title: 'Workout'},
    {id: 3, completed: false, title: 'Swimming'}
  ];

  const commentsAmount = [1, 2, 3];

  function changeCheckbox(id) {
    todos.forEach((el, i)=> {
      if (el.id === id) {
        todos[i].completed = !todos[i].completed;
      }
    });
    console.log(todos);
  }

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
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ToDoList todos={todos} onToggle={changeCheckbox}/>
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
