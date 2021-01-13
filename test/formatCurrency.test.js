import formatCurrency from '../lib/formatCurrency';

test(`Formats pence as pounds`, () => {
  expect(formatCurrency(15000000)).toEqual('£150,000');
});
