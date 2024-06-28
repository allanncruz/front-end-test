import styled from "styled-components";

export const Container = styled.section`
  grid-area: CT;
  padding: 25px;
  background-color: ${props => props.theme.colors.tertiary};
  height: calc(100vh - 90px);
  overflow-y: scroll;
  margin-top: 20px;

  @media(max-width: 720px){
    padding: 25px 10px;
  }
`;