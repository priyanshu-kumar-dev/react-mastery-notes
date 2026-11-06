import { useState } from "react";

const PasswordToggle = () => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <>
      <div>
        <input type={showPassword ? "text" : "password"} placeholder="Enter Password"/>
        <br />
        <button onClick={() => setshowPassword(!showPassword)}> {showPassword ? "Hide" : "Show"}</button>
      </div>

      
    </>
  );
};

export default PasswordToggle;
