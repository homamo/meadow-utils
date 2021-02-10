import convertToPence from '../lib/convertToPence';

test(`Converts whole pounds as pence`, () => {
  expect(convertToPence(150000)).toEqual(15000000);
});

test(`Converts pounds and pence as pence`, () => {
  expect(convertToPence(22.22)).toEqual(2222);
});

test(`Converts string with commas as pence`, () => {
  expect(convertToPence('1,222,333.44')).toEqual(122233344);
});

test(`Converts zero pounds`, () => {
  expect(convertToPence(0)).toEqual(0);
});
