import { useContext } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./components/Themes";
import CharCounter from "./components/CharCounter";
function App() {
  const {theme}= useContext(ThemeContext)
  return (
    <>
    <CharCounter/>
    <h1>Hi</h1>
      <div style={{backgroundColor:theme==="light"?"#fff":"#333",height:"100vh"}}>
        
        <ThemeButton />
      </div>
    </>
  );
}

export default App;
