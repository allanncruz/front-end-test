import { Link } from "react-router-dom";
import { IDataTable } from "../../interfaces/types";
import { covertePrice } from "../../utils/converterPrice";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container } from "./style";
import { Button } from "../Button";
import { PiShareDuotone } from "react-icons/pi";
import { useItems } from "../../hooks/theme";

export const TableList = ({data, dataHeader}: IDataTable) => {

  const { addItem } = useItems();

  return(
    <Container>
      <HeaderList>
        {dataHeader?.map(item => (
          <ListColumns key={item}>{item}</ListColumns>
        ))}
      </HeaderList>

      {data?.map(item => (
        
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
            <ListColumns>
                <Button primary onClick={() => addItem(item)}>Reservar</Button>
                <Link to={`item/${item.id}`}>
                  <Button secondary>
                    <PiShareDuotone />
                  </Button>
                </Link>
            </ListColumns>
          </ListRows>
      ))}
    </Container>
  )
}