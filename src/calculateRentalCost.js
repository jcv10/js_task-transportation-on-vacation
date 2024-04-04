/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_RENTAL_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * CAR_RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * CAR_RENTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return days * CAR_RENTAL_COST;
}

module.exports = calculateRentalCost;
