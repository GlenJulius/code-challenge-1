// fare.js

/**
 * Calculates the fare of a Boda Boda ride based on distance and optional custom rates.
 * Default rates:
 *  - Base Fare: KES 50
 *  - Per Km Rate: KES 30
 */

function calculateBodaFare(distanceKm, options = {}) {
  const baseFare = options.baseFare ?? 50;
  const perKmRate = options.perKmRate ?? 30;

  // Validation
  if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm <= 0) {
    return '❌ Please enter a valid positive number for distance in kilometers.';
  }

  const totalFare = baseFare + (distanceKm * perKmRate);

  return `🛵 Boda Boda fare calculation:
- Distance: ${distanceKm} km
- Base Fare: KES ${baseFare}
- Rate per Km: KES ${perKmRate}
➡️ Total Fare: KES ${totalFare}`;
}

// Example usage
console.log(calculateBodaFare(10));
console.log(calculateBodaFare(5, { baseFare: 60, perKmRate: 25 }));
console.log(calculateBodaFare(-3)); // Error case
