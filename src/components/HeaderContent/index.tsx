import { Container, Title } from "./style";

interface HeaderContentProps {
  title: string,
  children?: React.ReactNode
}

export const HeaderContent = ({title, children}: HeaderContentProps) =>{
  return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
  )
};