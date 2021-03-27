import React, {Component} from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addPost, ubdateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} ubdateNewPostText={ubdateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
