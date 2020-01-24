import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './Items';

console.log('ListItems', ListItems);

function App(props) {
  const arr = [1, 2, 3];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.time}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ListItems items={arr} />
      </header>
    </div>
  );
}

export default App;
