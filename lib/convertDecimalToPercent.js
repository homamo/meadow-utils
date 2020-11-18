import round from './round';

// Formats 0.0218 as 2.18
export default function (decimal) {
  return decimal ? round(decimal * 100, 2) : 0;
}
