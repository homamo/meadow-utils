import formatPercentage from '../lib/formatPercentage';

test(`Formats decimal as percentage`, () => {
  expect(formatPercentage(0.28)).toEqual('28%');
});

test(`Formats decimal as decimal percentage`, () => {
  expect(formatPercentage(0.028)).toEqual('2.8%');
});

test(`Formats decimal as decimal percentage with two places`, () => {
  expect(formatPercentage(0.028, 2)).toEqual('2.80%');
});

test(`Formats decimal as decimal percentage with one place`, () => {
  expect(formatPercentage(0.028, 1)).toEqual('2.8%');
});

test(`Formats decimal as decimal percentage zero places`, () => {
  expect(formatPercentage(0.028, 0)).toEqual('3%');
});

test(`Formats decimal as over percentage`, () => {
  expect(formatPercentage(2.8)).toEqual('280%');
});
