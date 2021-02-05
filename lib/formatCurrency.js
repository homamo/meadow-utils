import round from './round';
import convertToPounds from './convertToPounds';

export default function (
  value,
  { wholePounds = false, includeSymbol = true, source = 'pence' } = {},
) {
  // Removes commas and currency symbols
  let amount = Number(String(value).replace(/,|£/gi, ''));

  if (amount === null || amount === undefined || Number.isNaN(amount))
    return '-';

  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  };
  // if its a whole, pound amount, leave off the .00
  if (amount % 100 === 0 || wholePounds) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-GB', options);

  if (source === 'pence') amount = convertToPounds(amount);

  let result = formatter.format(wholePounds ? round(amount, 0) : amount);

  if (!includeSymbol) result = result.replace('£', '');

  return result;
}
