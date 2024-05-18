import React, { useState } from "react";
import { Brand, BrandLabel, Container } from "./style";
import { Toggle } from "../Toggle";
import { useTheme } from "../../hooks/theme";
import { TbAntennaBars4 } from "react-icons/tb";

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
        <Brand>
          <TbAntennaBars4 size={32} />
          <BrandLabel htmlFor="">Telecom Carrier</BrandLabel>
        </Brand>
        <Toggle 
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </Container>
  )
};