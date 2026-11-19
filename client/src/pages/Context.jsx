import { useContext } from "react";
import UserContext from "../context/UserContext";

function Context() {
  const {user, setUser} = useContext(UserContext)

  const handleLogin = () =>{
    setUser({...user, isLoggedIn : true});
  };

  const handleLogOut = () =>{
    setUser({...user, isLoggedIn : false});
  };

  return (
    <>
      {user.isLoggedIn && <h2>Welcome: {user.name}</h2>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <h2>Status: {user.isLoggedIn ? "Logged In"  : "Logged Out"}</h2>
    </>
  );
}

export default Context;