import React from "react";
import { createContext, useState } from "react";
export const ThemeContext = createContext();

const Themes = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
        </ThemeContext.Provider>
  </>;
};

export default Themes;
