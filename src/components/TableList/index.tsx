import { Link } from "react-router-dom";
import { IDataTable, INumbersProps } from "../../interfaces/types";
import { covertePrice } from "../../utils/converterPrice";
import { 
  ListRows, 
  HeaderList, 
  ListColumns, 
  Container,
  LabelAddButton,
  LabelRemoveButton} from "./style";
import { Button } from "../Button";
import { PiShareDuotone } from "react-icons/pi";
import { useItems } from "../../hooks/theme";
import { useState } from "react";

export const TableList = ({data, dataHeader, buttonsActions}: IDataTable) => {
  const { addItem, removeItem } = useItems();
  const [removeAddButton, setRemoveAddButton] = useState<number[]>([]);
  const [removeDeletButton, setRemoveDeletButton] = useState<number[]>([]);

  const handleAddItem = (item: INumbersProps) => {
    addItem(item);
    setRemoveAddButton((prevRemoveAddButton) => {
      if (prevRemoveAddButton.includes(item.id)) {
        return prevRemoveAddButton.filter(removeAddButton => removeAddButton !== item.id);
      } else {
        return [...prevRemoveAddButton, item.id];
      }
    });
    setRemoveDeletButton((prevRemoveDeletButton) => {
      return prevRemoveDeletButton.filter(removeDeletButton => removeDeletButton !== item.id);
    });
  };

  const handleRemoveItem = (item: INumbersProps) => {
    removeItem(item);
    setRemoveDeletButton((prevRemoveDeletButton) => {
      if (prevRemoveDeletButton.includes(item.id)) {
        return prevRemoveDeletButton.filter(removeDeletButton => removeDeletButton !== item.id);
      } else {
        return [...prevRemoveDeletButton, item.id];
      }
    });

    setRemoveAddButton((prevRemoveAddButton) => {
      return prevRemoveAddButton.filter(removeAddButton => removeAddButton !== item.id);
    });
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
                <Button 
                  primary 
                  className={`
                    btn-${removeAddButton.includes(item.id) ? 'remove' : ''}
                    btn-${removeDeletButton.includes(item.id) ? 'active' : ''}`}
                  onClick={() => handleAddItem(item)}>
                  <LabelAddButton />
                </Button>
                <Button 
                  danger
                  className={`
                    btn-delet${removeAddButton.includes(item.id) ? 'active' : ''} 
                    btn-delet-${removeDeletButton.includes(item.id) ? 'remove' : ''}`} 
                  onClick={() => handleRemoveItem(item)}>
                  <LabelRemoveButton />
                </Button>
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