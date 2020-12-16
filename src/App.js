import React from 'react';
import './App.css';
import ToDoList from './todos/ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';
import ToDoContext from './context';
import ToDoListEmpty from './todos/ToDoListEmpty';
import AddToDoItem from './todos/AddToDoItem';
import DoneAllToDoItem from './todos/DoneAllToDoItem';
import DeleteAllToDoItem from './todos/DeleteAllToDoItem';
import SectionTitle from './utilities/SectionTitle';
import Stopwatch from './time/Stopwatch';

class App extends React.Component {
   constructor() {
      console.log('App.js constructor');
      super();
      this.state = {
         inputValue: '',
         todos: [],
         areAllToDoDone: false
      };
      this.submitNewToDo = this.submitNewToDo.bind(this);
      this.changeToDoInput = this.changeToDoInput.bind(this);
      this.doneToDo = this.doneToDo.bind(this);
      this.doneAllToDo = this.doneAllToDo.bind(this);
      this.deleteToDo = this.deleteToDo.bind(this);
      this.deleteAllToDo = this.deleteAllToDo.bind(this);
      this.getUniqueID = this.getUniqueID.bind(this);
   }

   submitNewToDo(event) {
      event.preventDefault();
      console.log('submitNewToDo');
      const val = this.state.inputValue.trim();
      if (val) {
         const newTodos = this.state.todos.concat([{
            id: this.getUniqueID(),
            title: val,
            completed: false,
         }]);
         this.setState({
            inputValue: '',
            todos: newTodos,
            areAllToDoDone: false
         });
      }
   }

   changeToDoInput(event) {
      this.setState({ inputValue: event.target.value });
   }

   doneToDo(id) {
      this.setState({
         todos: this.state.todos.map(el => {
            if (el.id === id) {
               el.completed = !el.completed;
            }
            return el;
         })
      });
   }

   doneAllToDo() {
      this.setState({
         todos: this.state.todos.map(todo => {
            todo.completed = this.state.areAllToDoDone ? false : true;
            return todo;
         }),
         areAllToDoDone: !this.state.areAllToDoDone
      });
   }

   deleteToDo(id) {
      this.setState({
         todos: this.state.todos.filter(el => el.id !== id)
      });
      console.log(this.state.todos);
   }

   deleteAllToDo() {
      this.setState({ todos: [] });
   }

   checkIfAllToDoDone() {
      return this.state.todos.every(todo => todo.completed);
   }

   getUniqueID() {
      return Math.random().toString(36).substr(2, 9);
   };

   componentDidUpdate() {
      const areAllToDoDone = this.checkIfAllToDoDone();
      if (areAllToDoDone !== this.state.areAllToDoDone) {
         this.setState({ areAllToDoDone: areAllToDoDone });
      }
   }

   render() {
      console.log('render App');
      return (
         <div className="App">
            <header className="App-header">
               <h1>{this.props.time.toLocaleTimeString()}</h1>
            </header>

            <section className="section todo-section">
               <ToDoContext.Provider value="ToDos"><SectionTitle /></ToDoContext.Provider>

               <AddToDoItem
                  value={this.state.inputValue}
                  changeToDoInput={this.changeToDoInput}
                  submitNewToDo={this.submitNewToDo}
               />

               {
                  this.state.todos.length ?
                  <div className="todo-section--control-buttons">
                     <DoneAllToDoItem doneAllToDo={this.doneAllToDo} areAllToDoDone={this.state.areAllToDoDone} />
                     <DeleteAllToDoItem deleteAllToDo={this.deleteAllToDo} />
                  </div>
                  : ''
               }

               <ToDoContext.Provider value={{ doneToDo: this.doneToDo, deleteToDo: this.deleteToDo }}>
                  {this.state.todos.length ? <ToDoList todos={this.state.todos} /> : <ToDoListEmpty />}
               </ToDoContext.Provider>
            </section>

            <section className="section comment-section">
               <ToDoContext.Provider value="Comments"><SectionTitle /></ToDoContext.Provider>
               {[1, 2, 3].map(() => <CommentCard><CommentDetails /></CommentCard>)}
            </section>

            <section className="section seasons-section">
               <ToDoContext.Provider value="Seasons"><SectionTitle /></ToDoContext.Provider>
               <Seasons />
            </section>

            <section className="section stopwatch-section">
               <ToDoContext.Provider value="Stopwatch"><SectionTitle /></ToDoContext.Provider>
               <Stopwatch />
            </section>
         </div>
      );
   }
}

export default App;
