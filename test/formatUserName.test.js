import formatUserName from '../lib/formatUserName';

const user = { profile: { firstName: 'michael', lastName: 'scott' } };

test(`Formats name`, () => {
  expect(formatUserName(user)).toEqual('Michael Scott');
});

test(`Formats first name`, () => {
  expect(formatUserName(user, { first: true })).toEqual('Michael');
});

test(`Formats lowercase name`, () => {
  expect(formatUserName(user, { first: true, noProperize: true })).toEqual(
    'michael',
  );
});
