import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import useGlobal from './AppState';

import './App.css';



const Index = () => {
  const [store, update] = useGlobal();

  useEffect(()=> {
    axios.get("/api/it/", {})
    .then((response) => {
      update.SET_VERB(response.data.it)
    }).catch((e) => console.log("Error:", e))
  }, [])

  return (
    <header className="App-header">
      <h1>
        It is {store.verb}.
      </h1>
    </header>
  )
}


const Counters = () => {
  const [store, update] = useGlobal();

  return (
    <>
      <p>
        counter:
        {store.counter}
      </p>
      <button type="button" onClick={() => update.INCREMENT(1)}>
        +1 to global
      </button>
      <button type="button" onClick={() => update.DECREMENT(1)}>
        -1 to global
      </button>
      <button type="button" onClick={() => update.SET_USER("josh")}>
        Set User
      </button>
    </>
  )
}


const Users = () => {
  const [store, update] = useGlobal();

  const username = useRef(null)
  const email = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/users/", {
      "username": username.current.value,
      "email": email.current.value,
      "groups": []
    }).then((response) => {
      console.log("Create user", response)
    }).catch((e) => {
      console.log("Error:", e)
    })
  }

  useEffect(()=> {
    axios.get("/api/users/", {})
    .then((response) => {
      update.SET_USERS(response.data)
    }).catch((e) => {
      console.log("Error:", e)
    })
  }, [])

  return (
    <>
      <p>
        user:
        {store.user}
      </p>
      <ul>
        {
          store.users.map((user, index) => {
            return <li key={index}>{user.username} - {user.email}</li>
          })
        }
      </ul>

      <form onSubmit={onSubmit}>
        <input ref={username}></input>
        <br/>
        <input ref={email}></input>
        <br/>
        <button type='submit'>Create New User</button>
      </form>
    </>
  )
}

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
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/counters/" component={Counters} />
        <Route path="/users/" component={Users} />
      </Router>
    </>
  );
}

export default App;
