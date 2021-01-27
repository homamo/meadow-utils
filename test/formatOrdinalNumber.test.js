import formatOrdinalNumber from '../lib/formatOrdinalNumber';

test(`Formats 1st`, () => {
  expect(formatOrdinalNumber(1)).toEqual('1st');
});

test(`Formats 2nd`, () => {
  expect(formatOrdinalNumber(2)).toEqual('2nd');
});

test(`Formats 3rd`, () => {
  expect(formatOrdinalNumber(3)).toEqual('3rd');
});

test(`Formats 4th`, () => {
  expect(formatOrdinalNumber(4)).toEqual('4th');
});

test(`Formats 123rd`, () => {
  expect(formatOrdinalNumber(123)).toEqual('123rd');
});
