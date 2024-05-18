import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding: 20px;
  position: relative;
  margin: 20px;

  @media(max-width: 720px){
    padding: 10px;
    margin: 0;
  }
`;

export const MenuContainer = styled.nav`
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