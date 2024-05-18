import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const TextSmall = styled.small`
  display: block;
  margin-top: 10px;
  color: ${props => props.theme.colors.white};
`

export const TextPrice = styled.p`
  font-size: 22px;
  font-weight: 900;
`

export const BodyContent = styled.div`
  padding: 30px 0;
`

export const FooterContent = styled.div`
  padding: 30px 0;
`