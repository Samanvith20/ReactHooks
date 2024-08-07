import React, { useReducer } from 'react';
import './Usereducer.css';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="usereducer-container">
      <div className="counter">
        <h1>Use Reducer</h1>
        {state.count}</div>
      <div className="button-group">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
};

export default Usereducer;
