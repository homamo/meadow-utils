import getYearList from './getYearList';

export default function ({
  range = 100, // Default 100 years
  skip = 0, // Default to this year (skip zero years)
  type = 'past',
  ascending = false,
}) {
  const years = getYearList({ range, skip, type, ascending });
  const yearSelect = years.map((y) => ({
    value: y.toString(),
    label: y.toString(),
  }));
  return yearSelect;
}
