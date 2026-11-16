import { useState } from "react";

// Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increase, decrease, reset };
}

// UI Component
function Counter() {
  const { count, increase, decrease, reset } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
