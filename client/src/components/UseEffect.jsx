import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}> Decrease</button>
      <button onClick={() => setCount(0)}> Reset</button>
    </>
  );
}

export default UseEffect;
