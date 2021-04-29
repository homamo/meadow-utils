export default (value) => {
  const simplifiedValue = String(value).toLowerCase();
  return simplifiedValue === 'true' || simplifiedValue === '1';
};
