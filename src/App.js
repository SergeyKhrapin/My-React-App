import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import CommentDetails from './comments/CommentDetails';
import CommentCard from './comments/CommentCard';
import Seasons from './seasons/Seasons';
import ToDoContext from './context';
import ToDoListEmpty from './ToDoListEmpty';
import AddToDoItem from './AddToDoItem';
import SectionTitle from './utilities/SectionTitle';
import Stopwatch from './time/Stopwatch';

class App extends React.Component {
   constructor() {
      console.log('App.js constructor');
      super();
      this.state = {
         inputValue: '',
         todos: []
      };
      this.submitNewToDo = this.submitNewToDo.bind(this);
      this.changeToDoInput = this.changeToDoInput.bind(this);
      this.doneToDo = this.doneToDo.bind(this);
      this.deleteToDo = this.deleteToDo.bind(this);
   }

   submitNewToDo(event) {
      event.preventDefault();
      const val = this.state.inputValue.trim();
      if (val) {
         const newTodos = this.state.todos.concat([{
            id: this.state.todos.length + 1,
            title: val,
            completed: false,
         }]);
         this.setState({
            inputValue: '',
            todos: newTodos
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

   deleteToDo(id) {
      this.setState({ todos: this.state.todos.filter(el => el.id !== id) });
   }

   render() {
      console.log('App.js render');

      return (
         <div className="App">
            <header className="App-header">
               <h1>{this.props.time.toLocaleTimeString()}</h1>
            </header>

            <section className="section todo-section">
               <SectionTitle title="ToDos" />
               <AddToDoItem value={this.state.inputValue} changeToDoInput={this.changeToDoInput} submitNewToDo={this.submitNewToDo} />
               <ToDoContext.Provider value={{ doneToDo: this.doneToDo, deleteToDo: this.deleteToDo }}>
                  {this.state.todos.length ? <ToDoList todos={this.state.todos} /> : <ToDoListEmpty />}
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

            <section className="section stopwatch-section">
               <SectionTitle title="Stopwatch" />
               <Stopwatch />
            </section>
         </div>
      );
   }
}

export default App;
