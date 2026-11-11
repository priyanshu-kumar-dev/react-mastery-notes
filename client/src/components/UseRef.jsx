import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter name" />

      <button onClick={handleClick}>
        Focus
      </button>
    </div>
  );
}

export default UseRef;