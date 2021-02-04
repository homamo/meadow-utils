import round from './round';

// Formats 0.0218 as 2.18
export default function (value, decimals) {
  return value ? round(value * 100, decimals) : 0;
}
