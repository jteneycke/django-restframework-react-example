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
      <button type="button" onClick={() => update.SET_USER("josh")}>
        Set User
      </button>
    </>
  )
}

export default Counters;
