import React, { createContext, useState, useContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { ITheme, IThemeContext } from "../interfaces/types";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@telecom-carrier:theme');
    
    if(themeSaved) {
      return JSON.parse(themeSaved);
    }else{
      return dark;
    }
  });

  const toggleTheme = () => {
    if(theme.title === 'dark'){
      setTheme(light);
      localStorage.setItem('@telecom-carrier:theme', JSON.stringify(light));
    }else{
      setTheme(dark);
      localStorage.setItem('@telecom-carrier:theme', JSON.stringify(dark));
    }
  };

  return(
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };