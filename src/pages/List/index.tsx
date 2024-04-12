import { HeaderContent } from "../../components/HeaderContent";
import { NumberList } from "../../components/NumberList";
import { Container, InputSearch } from "./style";
import numberList from '../../services/numberList.json';

export default function List(){

  console.log(numberList)

  const dataHeader = [
    "Número",
    "Preço mensal",
    "Preço de configuração",
    "Moeda"
  ]

  return (
      <Container>
        <HeaderContent title="Números disponíveis">
          <InputSearch type="text" placeholder="Filtrar números" />
        </HeaderContent>

        <NumberList 
          dataHeader={dataHeader} 
          data={numberList} />
      </Container>
  )
};