import React from "react";
import { IoListSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { RiInformationLine } from "react-icons/ri";


import { 
  Container, 
  MenuContainer, 
  MenuItemLink,
  ReservedItems} from "./style";
import { useItems } from "../../hooks/context";

export const Aside: React.FC = () =>{
  const { selectedItems } = useItems();

  const countReservedItems = () => {
    if (selectedItems.length <= 0){
      return null
    }
    return <ReservedItems>{selectedItems.length}</ReservedItems>
  }

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
            {countReservedItems()}
          </MenuItemLink>
          <MenuItemLink to="/sobre">
            <RiInformationLine />
            Sobre
          </MenuItemLink>
        </MenuContainer>
      </Container>
  )
};