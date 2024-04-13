import { IHeaderContent } from "../../interfaces/types";
import { Container, Title } from "./style";


export const HeaderContent = ({title, children}: IHeaderContent) =>{
  return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
  )
};