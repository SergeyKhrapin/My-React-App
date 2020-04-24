import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';
import * as serviceWorker from './serviceWorker'; // @TODO: Learn - promises are used in serviceWorker

const callback = ()=> {
//   console.log('React component has been rendered :)');
}

ReactDOM.render(<App time={new Date()}/>, document.getElementById('root'), callback);
ReactDOM.render(<Search />, document.getElementById('search'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
