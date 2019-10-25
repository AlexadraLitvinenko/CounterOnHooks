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
import React, { useState } from 'react';

const App = () => {
  const [count = 0, action] = useState(count);
  return (
    <div>
      <h2>Counter of clicks : {count}</h2>
      <button onClick={() => action(count + 1)}>increase</button>
      <button onClick={() => action(count - 1)}>decrease</button>
      <button onClick={() => action(0)}>reset</button>
    </div>
  );
};

export default App;
