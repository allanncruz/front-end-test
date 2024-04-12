import styled from "styled-components";

export const Container = styled.section`
  grid-area: CT;
  padding: 25px;
  background-color: ${props => props.theme.colors.primary};

  height: calc(100vh - 70px);
  overflow-y: scroll;
`;