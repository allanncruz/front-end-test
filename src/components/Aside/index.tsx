import React from "react";
import { IoListSharp } from "react-icons/io5";
import { RiInformationLine } from "react-icons/ri";

import { 
  Container, 
  MenuContainer, 
  MenuItemLink} from "./style";

export const Aside: React.FC = () =>{
  return (
      <Container>
        <MenuContainer>
          <MenuItemLink to="/">
            <IoListSharp />
            Lista de números
          </MenuItemLink>
          <MenuItemLink to="/sobre">
            <RiInformationLine />
            Sobre
          </MenuItemLink>
        </MenuContainer>
      </Container>
  )
};