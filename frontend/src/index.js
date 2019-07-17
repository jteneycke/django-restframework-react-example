import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Router>
            <Route exact path="/login" component={Login} />
            <Route path='/' component={App} />
        </Router>
    </div>, document.getElementById('root'));
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
