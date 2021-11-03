// Sometimesids are strings, somethings they are objects
// This utility forces equation check
export default (idA, idB) => {
  if (!idA || !idB) return false;
  return idA.toString() === idB.toString();
};
