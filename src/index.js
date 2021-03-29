import React, {Component} from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={ store} />
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
