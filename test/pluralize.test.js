import pluralize from '../lib/pluralize';

test(`Formats simple string`, () => {
  expect(pluralize(2, 'meadow')).toEqual('meadows');
});

test(`Formats single unit`, () => {
  expect(pluralize(1, 'meadow')).toEqual('meadow');
});

test(`Formats with plural string`, () => {
  expect(pluralize(2, 'red fox', 'red foxes')).toEqual('red foxes');
});
