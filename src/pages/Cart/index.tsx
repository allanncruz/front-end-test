import React from 'react';
import { useItems } from '../../hooks/theme';

const Cart: React.FC = () => {
  const { selectedItems } = useItems();

  return (
    <div>
      <h1>Selected Items</h1>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;