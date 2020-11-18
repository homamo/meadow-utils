export default function (array) {
  if (!array) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}
