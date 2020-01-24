import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const arr = [1, 2, 3];

const getTime = ()=> {
    const date = new Date();

    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    return time.map((el)=> {
        return el > 9 ? el : `0${el}`;
    }).join(':');
}


const containerDOM = document.getElementById('root');
const callback = ()=> {
    console.log('React component has been rendered :)');
}

setInterval(()=> {
    const componentReact = <App items={arr} time={getTime()}/>;
    return ReactDOM.render(componentReact, containerDOM, callback);
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
