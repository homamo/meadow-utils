import capitalize from '../lib/capitalize';

test(`Formats string`, () => {
  expect(capitalize('homamo')).toEqual('Homamo');
});
