import React from 'react';
import './App.css';
import AddComment from './comments/functionComponent/AddComment';
// import AddComment from './comments/classComponent/AddComment';
import ToDoContext from './context';
import CommentDetails from './fakecomments/CommentDetails';
import CommentCard from './fakecomments/CommentCard';
import Seasons from './seasons/Seasons';
import AddToDoItem from './todos/AddToDoItem';
import SectionTitle from './utilities/SectionTitle';
import Stopwatch from './time/Stopwatch';
import SideBar from './sidebar/SideBar';
import SideBar1 from './sidebar/SideBar1';
import SideBar2 from './sidebar/SideBar2';

class App extends React.Component {
    constructor() {
        super();
        console.log('App constructor');
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

    static getDerivedStateFromError(error) {
        // console.log('getDerivedStateFromError');
    }

    render() {
        // console.log('render');

        return (
            <div className="App">
                <header className="App-header">
                    <h1>React learning</h1>
                </header>
                <main className="main">
                    <section className="section comments-section">
                        <ToDoContext.Provider value="Comments"><SectionTitle /></ToDoContext.Provider>
                        <AddComment />
                    </section>

                    <section className="section todo-section">
                        <ToDoContext.Provider value="ToDos"><SectionTitle /></ToDoContext.Provider>

                        <div id="info"></div>

                        <AddToDoItem />
                    </section>

                    <section className="section fake-comments-section">
                        <ToDoContext.Provider value="Fake Comments"><SectionTitle /></ToDoContext.Provider>
                        {[1, 2, 3].map(el => <CommentCard key={el} render={className => <CommentDetails className={className} />}></CommentCard>)}
                    </section>

                    <section className="section seasons-section">
                        <ToDoContext.Provider value="Seasons"><SectionTitle /></ToDoContext.Provider>
                        <Seasons />
                    </section>

                    <section className="section stopwatch-section">
                        <ToDoContext.Provider value="Stopwatch"><SectionTitle /></ToDoContext.Provider>
                        <Stopwatch />
                    </section>
                </main>

                <SideBar top={<SideBar1 />} bottom={<SideBar2 />} />
            </div>
        );
    }
}

export default App;

