import dayjs from 'dayjs';

export default function (date, format) {
  if (!date) return '-';

  if (format === 'date') return dayjs(date).format('DD/MM/YYYY');
  if (format === 'calendar') return dayjs(date).format('DD MMMM YYYY');
  if (format === 'monthYear') return dayjs(date).format('MMMM YYYY');
  if (format === 'month') return dayjs(date).format('MMMM');
  if (format === 'mon') return dayjs(date).format('MMM');
  if (format === 'year') return dayjs(date).format('YYYY');

  // Default to full date time
  return dayjs(date).format('HH:mm - DD/MM/YYYY');
}
