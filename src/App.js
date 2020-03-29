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
import Stopwatch from './time/Stopwatch';

// const todosAndSetToDos = React.useState([]);
// const inputValueAndSetInputValue = React.useState('');

class App extends React.Component {
  constructor() {
    console.log('App.js constructor');
    super();
  }

  // todos = todosAndSetToDos[0]
  // setToDos = todosAndSetToDos[1]

  // inputValue = inputValueAndSetInputValue[0]
  // setInputValue = inputValueAndSetInputValue[1]

  // submitNewToDo(event) {
  //   event.preventDefault();
  //   const val = this.inputValue.trim();
  //   if (val) {
  //     this.setToDos(this.todos.concat([{
  //       id: this.todos.length + 1,
  //       title: val,
  //       completed: false,
  //     }]));
  //     this.setInputValue('');
  //   }
  // }

  // changeToDoInput(event) {
  //   this.setInputValue(event.target.value);
  // }

  // doneToDo(id) {
  //   this.setToDos(this.todos.map(el => {
  //     if (el.id === id) {
  //       el.completed = !el.completed;
  //     }
  //     return el;
  //   }));
  // }

  // deleteToDo(id) {
  //   this.setToDos(this.todos.filter(el => el.id !== id));
  // }

  render() {
    console.log('App.js render');

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.time.toLocaleTimeString()}</h1>
        </header>

        {/* <section className="section todo-section">
          <SectionTitle title="ToDos" />
          <AddToDoItem value={this.inputValue} changeToDoInput={this.changeToDoInput} submitNewToDo={this.submitNewToDo} />
          <ToDoContext.Provider value={{doneToDo: this.doneToDo, deleteToDo: this.deleteToDo}}>
            { this.todos.length ? <ToDoList todos={this.todos} /> : <ToDoListEmpty /> }
          </ToDoContext.Provider>
        </section>

        <section className="section comment-section">
          <SectionTitle title="Comments" />
          {[1, 2, 3].map(() => <CommentCard><CommentDetails /></CommentCard>)}
        </section> */}

        <section className="section seasons-section">
          <SectionTitle title="Seasons" />
          {/* or we can use this instead :) */}
          { new SectionTitle({title:'Seasons'}).render() }

          <Seasons />
        </section>

        <section className="section stopwatch-section">
          <SectionTitle title="Timer" />
          <Stopwatch />
        </section>
      </div>
    );
  }
}

export default App;
