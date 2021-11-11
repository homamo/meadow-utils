import checkValidEmail from '../lib/checkValidEmail';

test(`Works with .com email`, () => {
  expect(checkValidEmail('michael@dundermifflin.com')).toEqual(true);
});

test(`Works with .co.uk email`, () => {
  expect(checkValidEmail('michael@dundermifflin.co.uk')).toEqual(true);
});

test(`Works with .co email`, () => {
  expect(checkValidEmail('michael@dundermifflin.co')).toEqual(true);
});

test(`Works with .edu email`, () => {
  expect(checkValidEmail('michael@dundermifflin.edu')).toEqual(true);
});

test(`Fails with localhost email`, () => {
  expect(checkValidEmail('michael@localhost')).toEqual(false);
});

test(`Works with localhost email and no TLD`, () => {
  expect(checkValidEmail('michael@localhost', false)).toEqual(true);
});

test(`Fails without TLD`, () => {
  expect(checkValidEmail('michael@')).toEqual(false);
});

test(`Fails with string`, () => {
  expect(checkValidEmail('michael')).toEqual(false);
});

test(`Fails with just TLD`, () => {
  expect(checkValidEmail('.com')).toEqual(false);
});

test(`Fails with empty string`, () => {
  expect(checkValidEmail('')).toEqual(false);
});

test(`Fails with undefined`, () => {
  expect(checkValidEmail()).toEqual(false);
});
