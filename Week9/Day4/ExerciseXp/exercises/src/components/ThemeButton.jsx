import React, { useContext } from 'react'
import { ThemeContext } from "./Themes";

const ThemeButton = () => {
      const{theme,toggleTheme} = useContext(ThemeContext)
  return (
    <>
    <button onClick={toggleTheme}>
        Switch to:{theme === "light" ? "dark" : "light"} 
    </button>
    </>
  )
}

export default ThemeButton