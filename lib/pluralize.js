export default function (count, unit, pluralUnit) {
  if (count === 1) return unit;
  return pluralUnit || `${unit}s`;
}
