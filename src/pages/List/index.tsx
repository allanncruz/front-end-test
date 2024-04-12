import { HeaderContent } from "../../components/HeaderContent";
import { Container, InputSearch } from "./style";

export default function List(){
  return (
      <Container>
        <HeaderContent title="Números disponíveis">
          <InputSearch type="text" placeholder="Filtrar números" />
        </HeaderContent>
      </Container>
  )
};