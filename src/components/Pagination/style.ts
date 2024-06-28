import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export const PageNumbers = styled.button`
  padding: 7px 10px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  margin: 0 3px;

  &:disabled{
    opacity: 0.5;
  }
`