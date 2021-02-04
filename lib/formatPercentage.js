import convertDecimalToPercent from './convertDecimalToPercent';

// Formats 0.0218 as 2.18%
export default function (value, decimals) {
  if (!value && value !== 0) return '-';

  let percent = convertDecimalToPercent(value, decimals);

  if (decimals || decimals === 0) percent = percent.toFixed(decimals);

  return `${percent}%`;
}
