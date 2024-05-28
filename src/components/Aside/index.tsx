import React from "react";
import { IoListSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
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
            Disponíveis
          </MenuItemLink>
          <MenuItemLink to="/reservados">
            <IoMdCart />
            Reservados
          </MenuItemLink>
          <MenuItemLink to="/sobre">
            <RiInformationLine />
            Sobre
          </MenuItemLink>
        </MenuContainer>
      </Container>
  )
};