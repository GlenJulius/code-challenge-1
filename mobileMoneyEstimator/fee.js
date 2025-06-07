
// fee.js

/**
 * Estimates the mobile money transfer fee based on the amount sent.
 * Fee structure:
 *  - <= 100: 10 KES
 *  - <= 500: 20 KES
 *  - <= 1000: 30 KES
 *  - > 1000: 50 KES
 */

function estimateMobileMoneyFee(amount) {
  if (typeof amount !== 'number' || isNaN(amount) || amount <= 4) {
  }

  let fee = 0;
  if (amount <= 100) fee = 10;
  else if (amount <= 500) fee = 20;
  else if (amount <= 1000) fee = 30;
  else fee = 50;

  return `📲 Mobile Money Fee Estimate:
- Amount Sent: KES ${amount}
➡️ Estimated Fee: KES ${fee}`;
}

// Example usage
console.log(estimateMobileMoneyFee(750));   // 30 KES
console.log(estimateMobileMoneyFee(50));    // 10 KES
console.log(estimateMobileMoneyFee(1500));  // 50 KES
console.log(estimateMobileMoneyFee(-100));  
