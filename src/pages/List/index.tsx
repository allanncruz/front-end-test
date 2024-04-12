import { HeaderContent } from "../../components/HeaderContent";
import { NumberList } from "../../components/NumberList";
import { Container, InputSearch } from "./style";

export default function List(){

  const dataHeader = [
    "Número",
    "Preço mensal",
    "Preço de configuração",
    "Moeda"
  ]

  const data = [
    {
      "id": 41,
      "value": "+55 84 91234-4322",
      "monthyPrice": "0.03",
      "setupPrice": "3.40",
      "currency": "U$"
    },
    {
      "id": 42,
      "value": "+55 84 91234-4323",
      "monthyPrice": "0.03",
      "setupPrice": "3.40",
      "currency": "U$"
    },
    {
      "id": 43,
      "value": "+55 84 91234-4324",
      "monthyPrice": "0.03",
      "setupPrice": "3.40",
      "currency": "U$"
    }
  ];

  return (
      <Container>
        <HeaderContent title="Números disponíveis">
          <InputSearch type="text" placeholder="Filtrar números" />
        </HeaderContent>

        <NumberList 
          dataHeader={dataHeader} 
          data={data} />
      </Container>
  )
};