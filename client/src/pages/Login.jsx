import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to login Pages</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </>
  );
};

export default Login;
