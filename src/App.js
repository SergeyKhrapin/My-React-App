import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

// console.log('ToDoList', ToDoList);

function App(props) {
  let todos = [
    {id: 1, completed: true, title: 'React learning'},
    {id: 2, completed: false, title: 'Workout'},
    {id: 3, completed: false, title: 'Swimming'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.time}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ToDoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
