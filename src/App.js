import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import Comment from './comments/Comment';

// console.log('ToDoList', ToDoList);

function App(props) {
  let todos = [
    {id: 1, completed: false, title: 'React learning'},
    {id: 2, completed: false, title: 'Workout'},
    {id: 3, completed: false, title: 'Swimming'}
  ];

  const comment = {
    author: {
        avatarUrl: 'https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-1/p160x160/70123177_1348495001969784_2789565899948949504_n.jpg?_nc_cat=106&_nc_ohc=4TjX_CgcpAIAX-FeHNV&_nc_ht=scontent.fiev2-1.fna&_nc_tp=6&oh=7b14cfd3aa538f2c3103d45726aed068&oe=5E95A729',
        name: 'Serhii Khrapin'
    },
    text: 'I believe it is a great idea!',
    date: '1/25/2020'
  };

  function changeCheckbox(id) {
    todos.forEach((el, i)=> {
      if (el.id === id) {
        todos[i].completed = !todos[i].completed;
      }
    });
    console.log(todos);
  }

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
        <Comment comment={comment} />
      </div>
    </div>
  );
}

export default App;
