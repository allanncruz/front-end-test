import { ChangeEvent, useState } from "react";
import { HeaderContent } from "../../components/HeaderContent";
import { TableList } from "../../components/TableList";
import { Container, InputSearch } from "./style";
import Loading from "../../components/Loading";
import dataItems from "../../data/mockData";

export default function List(){
  const [filter, setFilter] = useState('');

  const handleFiltroChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredItems = dataItems.filter(item => {
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
          <TableList 
            dataHeader={dataHeader} 
            data={filteredItems} />
        )}
      </Container>
  )
};