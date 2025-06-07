// fee.js

function estimateMobileMoneyFee(amount) {
  if (amount <= 100) return 10;
  if (amount <= 500) return 20;
  if (amount <= 1000) return 30;
  return 50; // for anything above 1000
}

// Example
console.log(estimateMobileMoneyFee(750));
