import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  border-right: solid 1px ${props => props.theme.colors.primaryLight};
  padding: 20px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: 17px;
  font-weight: 800;

  svg {
    top: -4px;
    position: relative;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.warning};
  transition: .3s;
  margin: 7px 0;
  display: flex;

  svg {
    margin-right: 7px;
  }

  &:hover {
    opacity: .7;
  }
`;  