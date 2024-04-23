import React from "react";
import { TbAntennaBars4 } from "react-icons/tb";
import { IoListSharp } from "react-icons/io5";
import { RiInformationLine } from "react-icons/ri";

import { 
  Container, 
  Brand,
  MenuContainer, 
  MenuItemLink, 
  BrandLabel} from "./style";

export const Aside: React.FC = () =>{
  return (
      <Container>
        <Brand>
          <TbAntennaBars4 size={32} />
          <BrandLabel htmlFor="">Telecom Carrier</BrandLabel>
        </Brand>
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