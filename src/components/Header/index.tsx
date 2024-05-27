import React, { useState } from "react";
import { Brand, BrandLabel, Container } from "./style";
import { Toggle } from "../Toggle";
import { useTheme } from "../../hooks/theme";
import { TbAntennaBars4 } from "react-icons/tb";
import { Link } from "react-router-dom";

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
        <Link to={'/'}>
          <Brand>
            <TbAntennaBars4 size={32} />
            <BrandLabel htmlFor="">Telecom Carrier</BrandLabel>
          </Brand>
        </Link>
        <Toggle 
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </Container>
  )
};