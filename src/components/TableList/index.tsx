import { Link } from "react-router-dom";
import { IDataTable, INumbersProps } from "../../interfaces/types";
import { covertePrice } from "../../utils/converterPrice";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container,} from "./style";
import { Button } from "../Button";
import { PiShareDuotone } from "react-icons/pi";
import { useItems } from "../../hooks/theme";
import { useState } from "react";
import ActionButtons from "./ActionButtons";

export const TableList = ({data, dataHeader, buttonsActions}: IDataTable) => {
  const { addItem, removeItem } = useItems();
  const [removeAddButton, setRemoveAddButton] = useState<number[]>([]);
  const [removeDeletButton, setRemoveDeletButton] = useState<number[]>([]);

  const handleAddItem = (item: INumbersProps) => {
    addItem(item);
    setRemoveAddButton((prevRemoveAddButton) =>
      prevRemoveAddButton.includes(item.id)
        ? prevRemoveAddButton.filter((id) => id !== item.id)
        : [...prevRemoveAddButton, item.id]
    );
    setRemoveDeletButton((prevRemoveDeletButton) =>
      prevRemoveDeletButton.filter((id) => id !== item.id)
    );
  };
  
  const handleRemoveItem = (item: INumbersProps) => {
    removeItem(item);
    setRemoveDeletButton((prevRemoveDeletButton) =>
      prevRemoveDeletButton.includes(item.id)
        ? prevRemoveDeletButton.filter((id) => id !== item.id)
        : [...prevRemoveDeletButton, item.id]
    );
    setRemoveAddButton((prevRemoveAddButton) =>
      prevRemoveAddButton.filter((id) => id !== item.id)
    );
  };

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