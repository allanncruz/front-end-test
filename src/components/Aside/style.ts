import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: #252a48;
  border-right: solid 1px #4d516f;
  padding: 20px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
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
  color: #fff;
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