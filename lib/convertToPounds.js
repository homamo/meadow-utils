import round from './round';

export default function (pence, decimals = 2) {
  const pounds = parseFloat(pence, 10) / 100;
  const hasPence = pounds % 100 !== 0;
  return hasPence ? round(pounds, decimals) : pounds;
}
