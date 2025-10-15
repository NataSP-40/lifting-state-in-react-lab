import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = (props) => {
    const { availableIngredients, addToBurger } = props;

  return (//looping through ingredients array passed from App
    <ul>
        {availableIngredients.map((ingredient) => {
            // replacing old list with the new Ingredient component as props
            return (
                <Ingredient
                key={ingredient.name}
                ingredient={ingredient}
                // adding onClick to add Ingredient
                onClick={() => addToBurger(ingredient)}
                buttonSymbol='+'
                />
                // <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                //     {ingredient.name}
                //     <button onClick={() => addToBurger(ingredient)}>+</button>
                // </li>
            );
        })}    
    </ul>
  );
};

export default IngredientList;
