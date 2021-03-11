const addressFields = [
  'building',
  'street',
  'address1',
  'address2',
  'town',
  'city',
  'county',
  'postcode',
  'country',
];

export default function formatAddress(address) {
  if (!address) return null;

  let addressString = '';

  const isNumberAddress =
    address.building && !Number.isNaN(parseInt(address.building, 10));

  addressFields.forEach((field) => {
    if (address[field] !== undefined && address[field] !== null) {
      if (addressString !== '') {
        if (isNumberAddress && field === 'street') addressString += ' ';
        else addressString += ', ';
      }
      addressString += address[field];
    }
  });

  // Removed final comma and space
  const formattedAddress = addressString;

  return formattedAddress;
}
