import formatAddress from '../lib/formatAddress';

test(`Formats address with building and street`, () => {
  expect(
    formatAddress({
      building: 'St Vincent House',
      street: 'Station Rd',
      town: 'Holton Heath',
      postcode: 'BH16 6HX',
    }),
  ).toEqual('St Vincent House, Station Rd, Holton Heath, BH16 6HX');
});

test(`Formats address with lines`, () => {
  expect(
    formatAddress({
      address1: 'St Vincent House',
      address2: 'Station Rd',
      town: 'Holton Heath',
      city: 'Poole',
      postcode: 'BH16 6HX',
    }),
  ).toEqual('St Vincent House, Station Rd, Holton Heath, Poole, BH16 6HX');
});

test(`Formats address with all options`, () => {
  expect(
    formatAddress({
      building: 'St Vincent House',
      street: 'Admiralty Park',
      address1: 'Station Rd',
      address2: 'Holton Heath',
      town: 'Poole',
      county: 'Dorset',
      postcode: 'BH16 6HX',
      country: 'UK',
    }),
  ).toEqual(
    'St Vincent House, Admiralty Park, Station Rd, Holton Heath, Poole, Dorset, BH16 6HX, UK',
  );
});
