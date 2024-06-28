import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.tertiary};
  padding: 20px;
  position: relative;
  margin: 20px;

  @media(max-width: 720px){
    padding: 10px;
    margin: 20px 3px;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
  transition: .3s;
  margin: 7px 0;
  display: flex;
  position: relative;

  svg {
    margin-right: 7px;
    color: ${props => props.theme.colors.info};
  }

  &:hover {
    opacity: .7;
  }

  @media(max-width: 720px){
    font-size: 0;
    justify-content: center;

    svg {
      font-size: 20px;
    }
  }
`; 

export const ReservedItems = styled.span`
  position: absolute;
  background: red;
  font-size: 11px;
  border-radius: 15px;
  padding: 3px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  top: 2px;
  right: 85px;
  padding-right: 4px;

    @media(max-width: 720px){
      right: -3px;
    }
`