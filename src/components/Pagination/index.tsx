import React from 'react';
import { Container, PageNumbers } from './style';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container>
      {pages.map(page => (
        <PageNumbers
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </PageNumbers>
      ))}
    </Container>
  );
};

export default Pagination;