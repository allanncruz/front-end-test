import React, { createContext, useState, useContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { INumbersProps, ITheme, IContext } from "../interfaces/types";


const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [selectedItems, setSelectedItems] = useState<INumbersProps[]>([]);

  const addItem = (item: INumbersProps) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

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
    <Context.Provider value={{ toggleTheme, theme, selectedItems, addItem }}>
      {children}
    </Context.Provider>
  )
};

function useItems(): IContext {
  const context = useContext(Context);

  return context;
}

export { ContextProvider, useItems };