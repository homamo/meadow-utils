import formatCurrency from '../lib/formatCurrency';

test(`Formats pence as pounds`, () => {
  expect(formatCurrency(15000000)).toEqual('£150,000');
});

test(`Formats pence as pounds with pence`, () => {
  expect(formatCurrency(2222)).toEqual('£22.22');
});

test(`Formats pence as whole pounds`, () => {
  expect(formatCurrency(2222, true)).toEqual('£22');
});

test(`Formats pence as pounds with zero`, () => {
  expect(formatCurrency(1550)).toEqual('£15.50');
});

test(`Formats zero pounds`, () => {
  expect(formatCurrency(0)).toEqual('£0');
});
