import formatPercentage from '../lib/formatPercentage';

test(`Formats decimal as percentage`, () => {
  expect(formatPercentage(0.28)).toEqual('28%');
});

test(`Formats decimal as decimal percentage`, () => {
  expect(formatPercentage(0.028)).toEqual('2.8%');
});

test(`Formats decimal as over percentage`, () => {
  expect(formatPercentage(2.8)).toEqual('280%');
});
