// Sometimesids are strings, somethings they are objects
// This utility forces equation check
export default (idA, idB) => idA.toString() === idB.toString();
