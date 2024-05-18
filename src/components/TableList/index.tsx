import { Link } from "react-router-dom";
import { IDataTable } from "../../interfaces/types";
import { covertePrice } from "../../utils/converterPrice";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container } from "./style";

export const TableList = ({data, dataHeader}: IDataTable) => {

  return(
    <Container>
      <HeaderList>
        {dataHeader?.map(item => (
          <ListColumns key={item}>{item}</ListColumns>
        ))}
      </HeaderList>

      {data?.map(item => (
        <Link to={`item/${item.id}`}>
          <ListRows key={item.id}>
            <ListColumns>
              {item.id}
            </ListColumns>
            <ListColumns>
              {item.value}
            </ListColumns>
            <ListColumns>
              {covertePrice(item.monthyPrice, item.currency)}
            </ListColumns>
            <ListColumns>
              {covertePrice(item.setupPrice, item.currency)}
            </ListColumns>
          </ListRows>
        </Link>
      ))}
    </Container>
  )
}