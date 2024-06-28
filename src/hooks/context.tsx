import React, { createContext, useState, useContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { INumbersProps, ITheme, IContext } from "../interfaces/types";


const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [selectedItems, setSelectedItems] = useState<INumbersProps[]>([]);
  const [removeDeletButton, setRemoveDeletButton] = useState<number[]>([]);
  const [removeAddButton, setRemoveAddButton] = useState<number[]>([]);


  const handleAddItem = (item: INumbersProps) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setRemoveAddButton((prevRemoveAddButton) =>
      prevRemoveAddButton.includes(item.id)
        ? prevRemoveAddButton.filter((id) => id !== item.id)
        : [...prevRemoveAddButton, item.id]
    );
    setRemoveDeletButton((prevRemoveDeletButton) =>
      prevRemoveDeletButton.filter((id) => id !== item.id)
    );
  };

  const handleRemoveItem = (item: INumbersProps) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((i) => i.id !== item.id)
    );
    setRemoveDeletButton((prevRemoveDeletButton) =>
      prevRemoveDeletButton.includes(item.id)
        ? prevRemoveDeletButton.filter((id) => id !== item.id)
        : [...prevRemoveDeletButton, item.id]
    );
    setRemoveAddButton((prevRemoveAddButton) =>
      prevRemoveAddButton.filter((id) => id !== item.id)
    );
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
    <Context.Provider value={{ toggleTheme, theme, selectedItems, removeAddButton, removeDeletButton, handleAddItem, handleRemoveItem }}>
      {children}
    </Context.Provider>
  )
};

function useItems(): IContext {
  const context = useContext(Context);

  return context;
}

export { ContextProvider, useItems };