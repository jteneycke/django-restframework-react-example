import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState()
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState([])

  const username = useRef(null)
  const email = useRef(null)

  useEffect(()=> {
    axios.get("/api/it/", {})
    .then((response) => {
      setState(response.data.it)
    }).catch((e) => console.log("Error:", e))

    axios.get("/api/users/", {})
    .then((response) => {
      setUsers(response.data)
    }).catch((e) => {
      setErrors(e)
      console.log("Error:", e)
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/users/", {
      "username": username.current.value,
      "email": email.current.value,
      "groups": []
    }).then((response) => {
      console.log("Create user", response)
    }).catch((e) => {
      setErrors(e)
      console.log("Error:", e)
    })
  }

  return (
    <div>
      <header className="App-header">
        <h1>
          It is {state}.
        </h1>
        <ul>
          {
            users.map((user, index) => {
              return <li key={index}>{user.username} - {user.email}</li>
            })
          }
        </ul>

        <form onSubmit={onSubmit}>
          {
            errors.map((key, value)=> {
              return <li key={key}>{key} - {value}</li>
            })
          }

          <input ref={username}></input>
          <br/>
          <input ref={email}></input>
          <br/>
          <button type='submit'>Create New User</button>
        </form>
          
      </header>
    </div>
  );
}

export default App;
