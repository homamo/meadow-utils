import checkValueIsTrue from '../lib/checkValueIsTrue';

test(`Works with string`, () => {
  expect(checkValueIsTrue('TRUE')).toEqual(true);
});

test(`Works with boolean`, () => {
  expect(checkValueIsTrue(true)).toEqual(true);
});

test(`Works with binary`, () => {
  expect(checkValueIsTrue(1)).toEqual(true);
});

test(`Fails with false string`, () => {
  expect(checkValueIsTrue('False')).toEqual(false);
});

test(`Fails with false boolean`, () => {
  expect(checkValueIsTrue(false)).toEqual(false);
});

test(`Fails with false binary`, () => {
  expect(checkValueIsTrue(0)).toEqual(false);
});
