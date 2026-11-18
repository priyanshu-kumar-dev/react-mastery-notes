import UseState from "./components/UseState";
import Props from "./components/Props";
import PasswordToggle from "./components/PasswordToggle";
import CharacterCounter from "./components/CharacterCounter";
import ConditionalRendering from "./components/ConditionalRendering";
import List from "./components/List";
import UseEffect from "./components/UseEffect";
import Api from "./components/Api";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import Counter from "./components/Counter;";
import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Profile from "./components/Profile";
import Reducer from "./components/Reducer";
import Navbar from "./components/Navbar";
import Parent from "./pages/Parent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      {/* <UseState />
      <Props /> 
      <PasswordToggle/>
      <CharacterCounter/> 
      <ConditionalRendering/> */}
      {/* <List/> */}
      {/* <UseEffect /> */}
      {/* <Api/> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <Counter/> */}
      {/* <ThemeContext.Provider value={{ theme, setTheme }}>
        <Profile />
      </ThemeContext.Provider> */}
      {/* <Reducer /> */}
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      {/* <Parent/> */}
    </>
  );
}

export default App;
