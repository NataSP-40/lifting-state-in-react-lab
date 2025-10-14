import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import { useState } from 'react';
import './App.css';

import './App.css';

const App = () => {

  const [stack, setStack] = useState([]); // state to hold the BurgerStack

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

    // function passed down to IngredientList
  const addToBurger = (ingredient) => {
    console.log('IngredientAdded', ingredient);
    // create new array with new ingredient Ingredient added
    setStack(prevStack => ([...prevStack, ingredient]));
  };

    // function passed down to BurgerStack
  const removeFromBurger = (index) => {
    // filter out the ingredient at the specified index
    console.log('IngredientRemoved', index);
    setStack((prevStack) => prevStack.filter((_,i) => i !== index));
  };



  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger} />
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
