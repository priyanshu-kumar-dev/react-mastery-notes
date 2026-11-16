import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Profile() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        background: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1>Hello Priyanshu</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Profile;
