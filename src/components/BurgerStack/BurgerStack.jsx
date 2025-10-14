

const BurgerStack = (props) => {   
  return (
    <ul>
        {props.stack.map((ingredient, index) => { // loping through the props.stack - array passed down from App
            return ( // creates list item for each ingredient and renders ingredient name inside list
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => props.removeFromBurger(index)}>-</button>
                </li>
            );
        })}
    </ul>
  );
};

export default BurgerStack;
