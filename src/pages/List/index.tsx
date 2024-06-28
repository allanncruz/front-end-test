import { useEffect, useState } from "react";
import { HeaderContent } from "../../components/HeaderContent";
import { TableList } from "../../components/TableList";
import { Container } from "./style";
import Loading from "../../components/Loading";
import dataItems from "../../data/mockData";
import { INumbersProps } from "../../interfaces/types";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";

export default function List(){
  const [items, setItems] = useState<INumbersProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;

  useEffect(() => {
    setItems(dataItems);
  }, []);

  const filteredItems = items.filter(item =>
    item.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const dataHeader = [
    "ID",
    "Número",
    "Preço mensal",
    "Preço de configuração",
    ""
  ]

  return (
      <Container>
        <HeaderContent title="Números disponíveis">
          <Search onSearch={handleSearch} />
        </HeaderContent>

        {!paginatedItems ? <Loading /> : (
          <TableList 
            dataHeader={dataHeader} 
            data={paginatedItems}
            buttonsActions={true} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
  )
};