import round from './round';

export default function (amount, decimals = 2) {
  // Removes commas and currency symbols
  const cleanedAmount = Number(String(amount).replace(/,|£/gi, ''));
  const pounds = parseFloat(cleanedAmount, 10) / 100;
  const hasPence = pounds % 100 !== 0;
  return hasPence ? round(pounds, decimals) : pounds;
}
