import React, { useState } from 'react';
import Section from './Section';
import CardContainer from './CardConatainer';

const MainComponent = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedFood, setSelectedFood] = useState('');

  return (
    <div>
      <Section 
        setSelectedRestaurant={setSelectedRestaurant} 
        setSelectedFood={setSelectedFood} 
      />
      <CardContainer 
        selectedRestaurant={selectedRestaurant} 
        selectedFood={selectedFood} 
      />
    </div>
  );
}

export default MainComponent;
