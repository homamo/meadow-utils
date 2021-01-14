export default function ({
  range = 100, // Default 100 years
  skip = 0, // Default to this year (skip zero years)
  type = 'past',
  ascending = false,
}) {
  const years = [];
  const thisYear = new Date().getFullYear();

  let start;
  let end;

  if (type === 'future') {
    start = thisYear + skip;
    end = start + range;
  } else {
    end = thisYear - skip;
    start = end - range;
  }

  if (ascending) {
    // Ascending
    for (let y = start; y <= end; y += 1) {
      years.push(y);
    }
  } else {
    // Descending
    for (let y = end; y >= start; y -= 1) {
      years.push(y);
    }
  }

  return years;
}
