import convertDecimalToPercent from './convertDecimalToPercent';

// Formats 0.0218 as 2.18%
export default function (decimal) {
  return decimal || decimal === 0
    ? `${convertDecimalToPercent(decimal)}%`
    : '-';
}
