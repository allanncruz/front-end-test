import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0 40px 0;
`;

export const ListRows = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 4px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 12px;

  &:hover {
    opacity: .9;
  }
`;

export const HeaderList = styled.div`
  padding: 10px;
  display: flex;
  color: ${props => props.theme.colors.white};
  border-top: solid 1px ${props => props.theme.colors.primaryLight};
  border-bottom: solid 1px ${props => props.theme.colors.primaryLight};
  font-weight: 900;

`;

export const ListColumns = styled.div`
  width: 100%;
  text-align: center;
`;


