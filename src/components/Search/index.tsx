import React from 'react';
import { InputSearch } from './style';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <InputSearch type="text" placeholder="Filtrar números..." onChange={handleInputChange} />
  );
};

export default Search;