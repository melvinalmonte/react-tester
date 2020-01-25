import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import { Login } from './pages/Login'
require('../node_modules/bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
    <BrowserRouter> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={MainPage} />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
