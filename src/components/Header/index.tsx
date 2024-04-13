import React, { useState } from "react";
import { Container } from "./style";
import { Toggle } from "../Toggle";
import { useTheme } from "../../hooks/theme";
import dark from "../../styles/themes/dark";

export const Header: React.FC = () => {

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(
    () => theme.title === 'dark' ? true : false
  )

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
      <Container>
        <Toggle 
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </Container>
  )
};