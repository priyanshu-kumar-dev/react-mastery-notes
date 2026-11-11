import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch("INCREMENT")}>
        Increase
      </button>

      <button onClick={() => dispatch("DECREMENT")}>
        Decrease
      </button>

      <button onClick={() => dispatch("RESET")}>
        Reset
      </button>
    </div>
  );
}

export default UseReducer;