
// the new reusable component
const Ingredient = ({ ingredient, onClick, buttonSymbol }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onClick}>{buttonSymbol}</button>
    </li>
  );
};

export default Ingredient;