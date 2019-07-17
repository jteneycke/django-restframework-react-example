import React from 'react';
import useGlobal from '../AppState';

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
      <h4>Live update state</h4>
      <input type="text" onChange={(e) => update.SET_USER(e.target.value)}></input>
    </>
  )
}

export default Counters;
