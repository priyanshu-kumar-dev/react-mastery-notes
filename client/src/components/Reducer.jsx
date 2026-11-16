import { useReducer } from "react";

const init = 0;

function reducer(state,action) {
  switch (action.type) {
    case "Increase":
      return state + 5;
    case "Decrease":
      return state - 5;
    case "Reset":
      return 0;
    default:
      return state;
  }
}

function Reducer() {
  const [count, dispatch] = useReducer(reducer, init);

  return (
    <>
    <h1> Count: {count}</h1>
      <button onClick={() => dispatch({ type: "Increase" })}> Increase by 5</button>
      <button onClick={() => dispatch({ type: "Decrease" })}> Decrease by 5</button>
      <button onClick={() => dispatch({ type: "Reset" })}> Reset</button>
    </>
  );
}

export default Reducer;
