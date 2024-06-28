import { Link } from "react-router-dom";
import { IDataTable } from "../../interfaces/types";
import { covertePrice } from "../../utils/converterPrice";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container,} from "./style";
import { Button } from "../Button";
import { PiShareDuotone } from "react-icons/pi";
import { useItems } from "../../hooks/context";
import ActionButtons from "./ActionButtons";

export const TableList = ({data, dataHeader, buttonsActions}: IDataTable) => {
  const { handleAddItem, handleRemoveItem, removeAddButton, removeDeletButton } = useItems();
  
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
            {buttonsActions && (
              <ListColumns>
                <ActionButtons
                  key={item.id}
                  item={item}
                  removeAddButton={removeAddButton}
                  removeDeletButton={removeDeletButton}
                  handleAddItem={() => handleAddItem(item)}
                  handleRemoveItem={() => handleRemoveItem(item)}
                  LabelAddButton={() => <span>Adicionar</span>}
                  LabelRemoveButton={() => <span>Remover</span>}
                />
                <Link to={`item/${item.id}`}>
                  <Button secondary>
                    <PiShareDuotone />
                  </Button>
                </Link>
              </ListColumns>
            )}
          </ListRows>
      ))}
    </Container>
  )
}