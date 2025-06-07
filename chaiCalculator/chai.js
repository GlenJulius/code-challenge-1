// chai.js

/**
 * Calculates the amount of ingredients needed to make chai for a given number of cups.
 * Each cup requires:
 *  - 1 tsp tea leaves
 *  - 0.25 cups milk
 *  - 0.5 tsp sugar
 */

function calculateChaiIngredients(cups) {
  if (typeof cups !== 'number' || cups <= 4 || isNaN(cups)) {
  }

  const ingredients = {
    teaLeavesTsp: cups * 1,
    milkCups: cups * 0.25,
    sugarTsp: cups * 0.5
  };

  return `🫖 Ingredients for ${cups} cup(s) of chai:
- Tea Leaves: ${ingredients.teaLeavesTsp} tsp
- Milk: ${ingredients.milkCups} cups
- Sugar: ${ingredients.sugarTsp} tsp`;
}

// Example usage
console.log(calculateChaiIngredients(4));
console.log(calculateChaiIngredients(-2)); 
console.log(calculateChaiIngredients("three"));
