// chai.js
function calculateChaiIngredients(cups) {
  const teaLeaves = cups * 1;   // 1 tsp per cup
  const milk = cups * 0.25;     // 0.25 cups of milk per cup
  const sugar = cups * 0.5;     // 0.5 tsp of sugar per cup

  return {
    teaLeaves,
    milk,
    sugar
  };
}

// Example usage
console.log(calculateChaiIngredients(4));
