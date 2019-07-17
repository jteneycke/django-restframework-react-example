import React, { useEffect } from 'react';

import useGlobal from '../AppState';

const Home = () => {
  const [store, update] = useGlobal();

  useEffect(()=> {
    update.GET_VERB()
  }, [])

  return (
    <header className="App-header">
      <h1>
        It is {store.verb}.
      </h1>
    </header>
  )
}

export default Home;

