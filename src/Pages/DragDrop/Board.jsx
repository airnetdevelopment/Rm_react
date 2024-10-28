import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Initial data for the cards
const initialCards = [
  { id: '1', content: 'Card 1' },
  { id: '2', content: 'Card 2' },
  { id: '3', content: 'Card 3' },
  { id: '4', content: 'Card 4' },
];

// Card component to display each draggable card
const Card = ({ card, index, moveCard }) => {
  const [, ref] = useDrag({
    type: 'CARD',
    item: { id: card.id, index },
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item) {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index; // Update the dragged item's index
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      style={{
        padding: '16px',
        margin: '8px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        cursor: 'move',
      }}
    >
      {card.content}
    </div>
  );
};

const MianApp = () => {
  const [cards, setCards] = useState(initialCards);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-row' style={{ width: '300px' }}>
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} moveCard={moveCard} />
        ))}
      </div>
    </DndProvider>
  );
};

export default MianApp;
