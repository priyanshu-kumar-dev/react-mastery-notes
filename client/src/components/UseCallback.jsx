import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked", count);
  },[count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default UseCallback;