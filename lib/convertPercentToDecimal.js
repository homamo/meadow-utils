import round from './round';

// Formats 2.18 as 0.0218
export default function (percent) {
  return percent ? round(percent / 100, 4) : 0;
}
