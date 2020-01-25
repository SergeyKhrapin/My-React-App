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
        avatarUrl: 'https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-1/p160x160/70123177_1348495001969784_2789565899948949504_n.jpg?_nc_cat=106&_nc_ohc=4TjX_CgcpAIAX-FeHNV&_nc_ht=scontent.fiev2-1.fna&_nc_tp=6&oh=7b14cfd3aa538f2c3103d45726aed068&oe=5E95A729',
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
