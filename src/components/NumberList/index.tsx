import { dataTableProps } from "../../interfaces/types";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container } from "./style";

export const NumberList = ({data, dataHeader}: dataTableProps) => (
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