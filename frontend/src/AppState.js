import React from 'react';
import useGlobalHook from 'use-global-hook';
import axios from 'axios';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


const initialState = {
  counter: 0,
  user: null,
  users: [],
  verb: null,
  signUp: {
    name: null,
    email: null
  }
};


const actions = {
  INCREMENT: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({
      counter: newCounterValue
    });
  },
  DECREMENT: (store, amount) => {
    const newCounterValue = store.state.counter - amount;
    store.setState({
      counter: newCounterValue
    });
  },
  SET_USER: (store, user) => {
    store.setState({
      user: user
    });
  },
  GET_USERS: (store, users) => {
    axios.get("/api/users/", {})
      .then((response) => {

        store.setState({
          users: response.data
        });

      }).catch((e) => {
        console.log("Error:", e)
      })
  },
  GET_VERB: (store) => {
    axios.get("/api/it/", {})
      .then((response) => {
        store.setState({
          verb: response.data.it
        });
      }).catch((e) => console.log("Error:", e))
  },
  CREATE_USER: (store, params) => {

    axios.post("/api/users/", params)
    .then((response) => {

      store.setState({
        user: response.data.username
      });

      //history.replace("/") // Changes route, but does not make corresoponding component show

      //console.log("Create user", response)
    }).catch((e) => {
      console.log("Error:", e)
    })

  },
};



const useGlobal = useGlobalHook(React, initialState, actions);


export default useGlobal
