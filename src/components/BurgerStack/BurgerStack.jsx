import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ stack, removeFromBurger }) => {   
  
// Conditional rendering: if the stack is empty show a friendly message
  if (!Array.isArray(stack) || stack.length === 0) {
    return (
      <p>No Ingredients ... add some!</p>
    );
  }
  // if not empty
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => removeFromBurger(index)}
          buttonSymbol='X'
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
