import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleLight = () => {
    setTheme("light");
  };

  const handleDark = () => {
    setTheme("dark");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={handleLight}>Light Mode</button>
      <button onClick={handleDark}>Dark Mode</button>

      <h1>Status: {theme === "light" ? "Light" : "Dark"}</h1>
    </div>
  );
};

export default Theme;
