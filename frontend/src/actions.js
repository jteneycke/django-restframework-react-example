export default {
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
  SET_USERS: (store, users) => {
    store.setState({
      users: users
    });
  },
  SET_VERB: (store, verb) => {
    store.setState({
      verb: verb
    });
  },
};
