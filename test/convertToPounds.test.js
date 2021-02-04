import convertToPounds from '../lib/convertToPounds';

test(`Converts pence as pounds`, () => {
  expect(convertToPounds(15000000)).toEqual(150000);
});

test(`Converts pence as pounds with pence`, () => {
  expect(convertToPounds(2222)).toEqual(22.22);
});

test(`Converts zero pounds`, () => {
  expect(convertToPounds(0)).toEqual(0);
});
