

const IngredientList = (props) => {
    const { availableIngredients, addToBurger } = props;

  return (//looping through ingredients array passed from App
    <ul>
        
        {availableIngredients.map((ingredient) => {
            return (
                <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
            );
        })}    
    </ul>
  );
};

export default IngredientList;
