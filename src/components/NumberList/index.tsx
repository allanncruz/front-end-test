import { ListRows, HeaderList, ListColumns, Container } from "./style";

interface numbersProps {
  id: number,
  value: string,
  monthyPrice: string,
  setupPrice: string,
  currency: string
}

interface dataProps {
  data: numbersProps[],
  dataHeader: Array<any>
}

export const NumberList = ({data, dataHeader}: dataProps) => (
  <Container>
    <HeaderList>
      {dataHeader?.map(item => (
        <ListColumns key={item}>{item}</ListColumns>
      ))}
    </HeaderList>

    {data?.map(item => (
      <ListRows key={item.id}>
        <ListColumns>
          {item.value}
        </ListColumns>
        <ListColumns>
          {item.monthyPrice}
        </ListColumns>
        <ListColumns>
          {item.setupPrice}
        </ListColumns>
        <ListColumns>
          {item.currency}
        </ListColumns>
      </ListRows>
    ))}
  </Container>
)