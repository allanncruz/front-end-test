import React from 'react';
import { useItems } from '../../hooks/context';
import { TableList } from '../../components/TableList';
import { HeaderContent } from '../../components/HeaderContent';

const Cart: React.FC = () => {
  const { selectedItems } = useItems();

  const dataHeader = [
    "ID",
    "Número",
    "Preço mensal",
    "Preço de configuração"
  ]

  return (
    <>
      <HeaderContent title="Números reservados" />
      <TableList
        dataHeader={dataHeader} 
        data={selectedItems}
        buttonsActions={false} />
    </>
  );
};

export default Cart;