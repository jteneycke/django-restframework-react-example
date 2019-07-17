import React from 'react';
import useGlobalHook from 'use-global-hook';
import actions from './actions.js';

const initialState = {
  counter: 0,
  user: null,
  users: [],
  verb: null
};


const useGlobal = useGlobalHook(React, initialState, actions);


export default useGlobal
