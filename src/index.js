import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import getTime from './Time';
import Comment from './comments/Comment';

const containerDOM = document.getElementById('root');
const callback = ()=> {
    console.log('React component has been rendered :)');
}

// setInterval(()=> {
    const componentReact = <App time={getTime()}/>;
    ReactDOM.render(componentReact, containerDOM, callback);
// }, 1000)


const comment = {
    author: {
        avatarUrl: '#',
        name: 'Serhii Khrapin'
    },
    text: 'I believe it is a great idea!',
    date: '1/25/2020'
};
const commentComponent = <Comment comment={comment}/>;
ReactDOM.render(commentComponent, containerDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
