import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" value={text} placeholder="Enter Text" onChange={(a) => setText(a.target.value)} />
      <p>Characters: {text.length}</p>
    </>
  );
};

export default CharacterCounter;
