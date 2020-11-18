export default function (address) {
  if (!address) return '-';

  return `${address.address1 ? `${address.address1}, ` : ''}${
    address.address2 ? `${address.address2}, ` : ''
  }${address.city ? `${address.city}, ` : ''}${
    address.county ? `${address.county}, ` : ''
  }${address.postcode ? `${address.postcode} ` : ''}`;
}
