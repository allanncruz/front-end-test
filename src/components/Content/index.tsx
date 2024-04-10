import { Container } from "./style";

const Content = ({ children }: {children: React.ReactNode}  ) =>{
  return (
      <Container>
        {children}
      </Container>
  )
};

export default Content; 