import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';
import ToDoContext from './context';
import ToDoListEmpty from './ToDoListEmpty';
import AddToDoItem from './AddToDoItem';
import SectionTitle from './SectionTitle';

const App = props => {
  console.log('App has been rerendered');

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.time.toLocaleTimeString()}</h1>
      </header>

      <section className="section todo-section">
        <SectionTitle title="ToDos" />
        <AddToDoItem value={inputValue} changeToDoInput={changeToDoInput} submitNewToDo={submitNewToDo} />
        <ToDoContext.Provider value={{doneToDo, deleteToDo}}>
          { todos.length ? <ToDoList todos={todos} /> : <ToDoListEmpty /> }
        </ToDoContext.Provider>
      </section>

      <section className="section comment-section">
        <SectionTitle title="Comments" />
        {[1, 2, 3].map(() => <CommentCard><CommentDetails /></CommentCard>)}
      </section>

      <section className="section seasons-section">
        <SectionTitle title="Seasons" />
        <Seasons />
      </section>
    </div>
  );
};

export default App;
