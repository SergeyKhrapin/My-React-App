import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // @TODO: Learn - promises are used in serviceWorker

const containerDOM = document.getElementById('root');
const callback = ()=> {
    console.log('React component has been rendered :)');
}

const renderComponent = ()=> {
    const componentReact = <App time={new Date()}/>;
    ReactDOM.render(componentReact, containerDOM, callback);
}

renderComponent();

// setInterval(renderComponent, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
