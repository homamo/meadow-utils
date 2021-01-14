import dayjs from 'dayjs';
import capitalize from './capitalize';

export default function (dateMonth, dateYear) {
  return new Date(
    dayjs(`28 ${capitalize(dateMonth)} ${dateYear}`, 'DD MMM YYYY'),
  );
}
