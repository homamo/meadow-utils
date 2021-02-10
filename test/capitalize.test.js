import capitalize from '../lib/capitalize';

test(`Formats string`, () => {
  expect(capitalize('homamo')).toEqual('Homamo');
});

test(`Formats empty string`, () => {
  expect(capitalize(undefined)).toEqual('');
});
