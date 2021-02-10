export default function (amount) {
  // Removes commas and currency symbols
  const cleanedAmount = Number(String(amount).replace(/,|£/gi, ''));

  return parseFloat(cleanedAmount, 10) * 100;
}
