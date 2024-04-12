import { HeaderContentProps } from "../../interfaces/types";
import { Container, Title } from "./style";


export const HeaderContent = ({title, children}: HeaderContentProps) =>{
  return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
  )
};