import React, { useReducer } from 'react';

function App() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrease
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          increase
        </button>
      </div>
    </>
  );
}

export default App;
