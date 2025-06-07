// fare.js

function calculateBodaFare(distanceKm) {
  const baseFare = 50;         // base fare in KES
  const perKmRate = 30;        // cost per km

  return baseFare + (distanceKm * perKmRate);
}

// Example
console.log(calculateBodaFare(10)); // 50 + 30*10 = 350
