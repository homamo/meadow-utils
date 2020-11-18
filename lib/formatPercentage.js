import round from './round';

// Formats 2.18 as 0.0218
export const decimalFromPercentage = (percentage) => {
  return percentage ? round(percentage / 100, 4) : 0;
};

// Formats 0.0218 as 2.18
export const percentageFromDecimal = (float) => {
  return float ? round(float * 100, 2) : 0;
};

// Formats 0.0218 as 2.18%
export default function (float) {
  return float || float === 0 ? `${percentageFromDecimal(float)}%` : '-';
}
