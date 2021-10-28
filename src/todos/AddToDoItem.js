import React from 'react';
import ToDoContext from '../context';
import ToDoControls from './ToDoControls';
import ToDoList from './ToDoList';
import ToDoListEmpty from './ToDoListEmpty';
import InfoMessage from './InfoMessage';
import todoConstants from '../constants/todo';

class AddToDoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            areAllToDoDone: false,
            toDoTypeToDelete: 1
        };
        this.changeToDoInput = this.changeToDoInput.bind(this);
        this.submitNewToDo = this.submitNewToDo.bind(this);
        this.doneToDo = this.doneToDo.bind(this);
        this.doneAllToDo = this.doneAllToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.deleteToDoItems = this.deleteToDoItems.bind(this);
        this.getUniqueID = this.getUniqueID.bind(this);
    }

    componentWillMount() {
        // console.log('componentWillMount');
    }

    componentDidMount() {
        // console.log('componentDidMount');
    }

    componentWillUpdate() {
        // console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }

    componentDidCatch() {
        // console.log('componentDidCatch');
    }

    changeToDoInput(event) {
        this.setState({ inputValue: event.target.value });
    }

    submitNewToDo(event) {
        event.preventDefault();

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
    }

    deleteToDoItems(event) {
        const val = event.target.value;
        let todos = []; // val == todoConstants.deleteAllToDos

        if (val == todoConstants.deleteCompletedToDos) {
            todos = this.state.todos.filter(todo => !todo.completed);
        }

        if (val == todoConstants.deleteUncompletedToDos) {
            todos = this.state.todos.filter(todo => todo.completed);
        }

        this.setState({
            todos: todos,
            toDoTypeToDelete: val
        });
    }

    checkIfAllToDoDone() {
        return this.state.todos.every(todo => todo.completed);
    }

    getUniqueID() {
        return Math.random().toString(36).substr(2, 9);
    }

    componentDidUpdate() {
        const areAllToDoDone = this.checkIfAllToDoDone();
        if (areAllToDoDone !== this.state.areAllToDoDone) {
            this.setState({ areAllToDoDone: areAllToDoDone });
        }
    }

    render() {
        const toDoControls = {
            doneAllToDo: this.doneAllToDo,
            areAllToDoDone: this.state.areAllToDoDone,
            deleteToDoItems: this.deleteToDoItems,
            toDoTypeToDelete: this.state.toDoTypeToDelete
        };

        return (
            <>
                <h3>{Date.now()}</h3>
                <form id="todo-form" action="" onSubmit={this.submitNewToDo}>
                    <input
                        id="todo-add"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.changeToDoInput} />
                    <input type="submit" value="Add ToDo" />
                </form>
                { this.state.todos.length ? <ToDoContext.Provider value={toDoControls}><ToDoControls /></ToDoContext.Provider> : '' }

                <ToDoContext.Provider value={{ doneToDo: this.doneToDo, deleteToDo: this.deleteToDo }}>
                    { this.state.todos.length ?
                        <ToDoList todos={this.state.todos}><InfoMessage todoQuantity={this.state.todos.length} /></ToDoList> :
                        <ToDoListEmpty /> }
                </ToDoContext.Provider>
            </>
        );
    }
}

export default AddToDoItem;
