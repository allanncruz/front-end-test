import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  border-right: solid 1px ${props => props.theme.colors.primaryLight};
  padding: 20px;
  position: relative;

  @media(max-width: 720px){
    padding: 10px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};

  svg {
    background-color: ${props => props.theme.colors.warning};
    border-radius: 4px;
    margin-right: 10px;
  }

  @media(max-width: 720px){
    display: flex;
    justify-content: center;
    svg {
      margin-right: 0;
    }
  }
`;

export const BrandLabel = styled.label`
  font-weight: 800;
  font-size: 17px;

  @media(max-width: 720px){
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
  color: ${props => props.theme.colors.info};
  transition: .3s;
  margin: 7px 0;
  display: flex;

  svg {
    margin-right: 7px;
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