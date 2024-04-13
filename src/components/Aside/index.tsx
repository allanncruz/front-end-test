import React from "react";
import { TbAntennaBars4 } from "react-icons/tb";
import { IoListSharp } from "react-icons/io5";
import { RiInformationLine } from "react-icons/ri";

import { 
  Container, 
  Brand,
  MenuContainer, 
  MenuItemLink } from "./style";

export const Aside: React.FC = () =>{
  return (
      <Container>
        <Brand>
          <TbAntennaBars4 size={32} />
          Telecom Carrier
        </Brand>
        <MenuContainer>
          <MenuItemLink href="/">
            <IoListSharp />
            Lista de números
          </MenuItemLink>
          <MenuItemLink href="/sobre">
            <RiInformationLine />
            Sobre
          </MenuItemLink>
        </MenuContainer>
      </Container>
  )
};