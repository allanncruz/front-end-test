import { ChangeEvent, useState } from "react";
import { HeaderContent } from "../../components/HeaderContent";
import { NumberList } from "../../components/NumberList";
import { Container, InputSearch } from "./style";
import numberList from '../../services/numberList.json';
import Loading from "../../components/Loading";

export default function List(){
  const [filter, setFilter] = useState('');

  const handleFiltroChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredItems = numberList.filter(item => {
    const searchTerm  = filter.toLowerCase();
    const itemValue   = item.value.toLowerCase();
  
    return (
      itemValue.includes(searchTerm)
    );
  });

  const dataHeader = [
    "Número",
    "Preço mensal",
    "Preço de configuração"
  ]

  return (
      <Container>
        <HeaderContent title="Números disponíveis">
          <InputSearch type="text" placeholder="Filtrar números" value={filter} onChange={handleFiltroChange} />
        </HeaderContent>

        {!filteredItems ? <Loading /> : (
          <NumberList 
            dataHeader={dataHeader} 
            data={filteredItems} />
        )}
      </Container>
  )
};