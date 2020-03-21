import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';
import ToDoContext from './context';
import ToDoListEmpty from './ToDoListEmpty';
import AddToDoItem from './AddToDoItem';

const App = props => {
  console.log('App has been rerendered');
  /* ToDo logic - START */
  let [todos, setToDos] = React.useState([]);
  let [inputValue, setInputValue] = React.useState('');

  const submitNewToDo = event => {
    event.preventDefault();
    const val = inputValue.trim();
    if (val) {
      setToDos(todos.concat([{
        id: todos.length + 1,
        title: val,
        completed: false,
      }]));
      setInputValue('');
    }
  };

  const changeToDoInput = event => {
    setInputValue(event.target.value);
  };

  const doneToDo = id => {
    setToDos(todos.map(el => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    }));
  };

  const deleteToDo = id => {
    setToDos(todos.filter(el => el.id !== id));
  };
  /* ToDo logic - END */

  /* Comments logic - START */
  const commentsAmount = [1, 2, 3];
  /* Comments logic - END */

  /* Seasons logic - START */
  const currentMonth = new Date().getMonth();
  const isBetweenMarchAndOctober = currentMonth >= 2 && currentMonth <= 9;
  let isNorthernHemisphere, isWinter;

  const [seasonState, setSeasonState] = React.useState(isWinter);

  navigator.geolocation.getCurrentPosition(pos => {
    const latitude = pos.coords.latitude;
    isNorthernHemisphere = latitude > 0 && latitude < 90;
    isWinter = isNorthernHemisphere && !isBetweenMarchAndOctober || !isNorthernHemisphere && isBetweenMarchAndOctober;
    setSeasonState(isWinter);
  });
  /* Seasons logic - END */

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.time.toLocaleTimeString()}</h1>
      </header>

      <section className="section todo-section">
        <h2>ToDos</h2>
        <AddToDoItem value={inputValue} changeToDoInput={changeToDoInput} submitNewToDo={submitNewToDo} />
        <ToDoContext.Provider value={{doneToDo, deleteToDo}}>
          { todos.length ? <ToDoList todos={todos} /> : <ToDoListEmpty /> }
        </ToDoContext.Provider>
      </section>

      <section className="section comment-section">
        <h2>Comments</h2>
        {commentsAmount.map(() => <CommentCard><CommentDetails /></CommentCard>)}
      </section>

      <section className="section seasons-section">
        <h2>Seasons</h2>
        <Seasons isWinter={seasonState} />
      </section>
    </div>
  );
};

export default App;
