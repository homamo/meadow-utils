import formatCurrency from '../lib/formatCurrency';

test(`Formats pence as pounds`, () => {
  expect(formatCurrency(15000000)).toEqual('£150,000');
});

test(`Formats pence as pounds without pound sign`, () => {
  expect(formatCurrency(15000000, { includeSymbol: false })).toEqual('150,000');
});

test(`Formats pence as pounds with pence`, () => {
  expect(formatCurrency(2222)).toEqual('£22.22');
});

test(`Formats pence as whole pounds`, () => {
  expect(formatCurrency(2222, { wholePounds: true })).toEqual('£22');
});

test(`Formats pence as pounds with zero`, () => {
  expect(formatCurrency(1550)).toEqual('£15.50');
});

test(`Formats zero pounds`, () => {
  expect(formatCurrency(0)).toEqual('£0');
});

test(`Works with commas`, () => {
  expect(formatCurrency('150,000', { source: 'pounds' })).toEqual('£150,000');
});

test(`Works with pounds sign`, () => {
  expect(formatCurrency('£150,000', { source: 'pounds' })).toEqual('£150,000');
});

test(`Works with decimals`, () => {
  expect(formatCurrency('150,000.00', { source: 'pounds' })).toEqual(
    '£150,000',
  );
});
