import React from 'react';
import { Button } from '../Button';

interface ButtonProps {
  item: { id: number };
  removeAddButton: number[];
  removeDeletButton: number[];
  handleAddItem: (item: { id: number }) => void;
  handleRemoveItem: (item: { id: number }) => void;
  LabelAddButton: React.FC;
  LabelRemoveButton: React.FC;
}

const ActionButtons: React.FC<ButtonProps> = ({
  item,
  removeAddButton,
  removeDeletButton,
  handleAddItem,
  handleRemoveItem,
  LabelAddButton,
  LabelRemoveButton,
}) => {
  return (
    <>
      <Button
        primary
        className={`
          btn-${removeAddButton.includes(item.id) ? 'remove' : ''}
          btn-${removeDeletButton.includes(item.id) ? 'active' : ''}`}
        onClick={() => handleAddItem(item)}
      >
        <LabelAddButton />
      </Button>
      <Button
        danger
        className={`
          btn-delet${removeAddButton.includes(item.id) ? 'active' : ''} 
          btn-delet-${removeDeletButton.includes(item.id) ? 'remove' : ''}`}
        onClick={() => handleRemoveItem(item)}
      >
        <LabelRemoveButton />
      </Button>
    </>
  );
};

export default ActionButtons;