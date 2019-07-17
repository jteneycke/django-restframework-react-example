import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counters from './components/Counters';
import Users from './components/Users';
import Home from  './components/Home';
import Login from  './components/Login';

import './App.css';

import useGlobal from './AppState';

const App = () => {
  const [store, update] = useGlobal();

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counters/">Counters</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>

          <h1>
            HTTP verb test is: "{store.verb}"
          </h1>
          <h1>
            User is {store.user}.
          </h1>
          <h1>
            Count is {store.counter}.
          </h1>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/counters/" component={Counters} />
        <Route path="/users/" component={Users} />
        <Route path="/login/" component={Login} />
      </Router>
    </>
  );
}

export default App;
