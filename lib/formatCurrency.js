import round from './round';

export default function (amount, wholePounds) {
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

  return formatter.format(wholePounds ? round(amount / 100, 0) : amount / 100);
}

export const convertToPounds = (amount) => parseFloat(amount, 10) / 100;
export const convertToPence = (amount) => parseFloat(amount, 10) * 100;
