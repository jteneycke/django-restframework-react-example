import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState()

  useEffect(()=> {
    axios.get("/api/it/", {})
    .then((response) => {
      setState(response.data.it)
    }).catch((e) => console.log("Error:", e))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          It is {state}.
        </h1>
          
      </header>
    </div>
  );
}

export default App;
