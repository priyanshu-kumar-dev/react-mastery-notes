import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Priyanshu");

  const result = useMemo(() => {
    console.log("Calculation running");
    return count * 2;
  }, [count,name]);

  return (
    <>
      <h1>{name}</h1>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </>
  );
}

export default App;