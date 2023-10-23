import React, { useState } from 'react';
import '../style.css';

function useCounters(initialValue) {
  const [counters, setCounters] = useState(initialValue);

  const increment = () => {
    setCounters(counters + 1);
  };

  const decrement = () => {
    counters > 0 ? setCounters(counters - 1) : setCounters(0);
  };

  const reset = () => {
    setCounters(0);
  };

  return { setCounters, counters, increment, decrement, reset };
}

const Counters = () => {
  const { setCounters, counters, increment, decrement, reset } = useCounters(0);
  const value = useState(10);

  return (
    <div className="countContainer">
      <p className="numCount">Count: {counters}</p>
      <div className="buttonstyle">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="increment" onClick={decrement}>
          Decrement
        </button>
        <button className="increment" onClick={reset}>
          Reset
        </button>
        <button
          className="valstyle"
          onClick={() => setCounters((value) => (value = 10))}
        >
          Value
        </button>
      </div>
    </div>
  );
};

export default Counters;
