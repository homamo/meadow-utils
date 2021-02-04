/**
 *
 * @param {number} value
 * @param {number} decimals
 *
 * @return {number} Rounded number
 *
 * @example Number(Math.round(1.005+'e2')+'e-2'); // 1.01
 */

export default function (value, decimals = 2) {
  const exponentialPositive = `e${decimals}`;
  const exponentialNegative = `e-${decimals}`;
  return Number(Math.round(value + exponentialPositive) + exponentialNegative);
}
