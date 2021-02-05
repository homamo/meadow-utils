import round from './round';

export default function (
  amount,
  { wholePounds = false, includeSymbol = true } = {},
) {
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

  let result = formatter.format(
    wholePounds ? round(amount / 100, 0) : amount / 100,
  );

  if (!includeSymbol) result = result.replace('£', '');

  return result;
}
