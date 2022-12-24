import { useState } from 'react';

export function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  const increment = () => {
    setState({ count: count + 1 });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
