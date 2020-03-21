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
  /* ToDo logic - START */
  let [todos, setToDos] = React.useState([]);

  const submitNewToDo = event => {
    event.preventDefault();
    const toDoTitle = event.target.dataset.value.trim();
    if (toDoTitle) {
      todos.push({
        id: todos.length + 1,
        completed: false,
        title: toDoTitle,
      });
      setToDos(Object.assign([], todos));
    }
  };

  const changeToDoInput = event => {
    event.target.form.dataset.value = event.target.value;
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
        <AddToDoItem changeToDoInput={changeToDoInput} submitNewToDo={submitNewToDo} />
        <ToDoContext.Provider value={{doneToDo, deleteToDo}}>
          { todos.length ? <ToDoList todos={todos} /> : <ToDoListEmpty /> }
        </ToDoContext.Provider>
      </header>

      <div className="Comment">
        {commentsAmount.map(() => <CommentCard><CommentDetails /></CommentCard>)}
      </div>

      <div className="seasons">
        <Seasons isWinter={seasonState} />
      </div>
    </div>
  );
};

export default App;
