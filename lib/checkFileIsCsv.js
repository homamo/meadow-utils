export default function (file) {
  return (
    file &&
    (file.type === 'text/csv' ||
      file.type === '.csv' ||
      file.type === 'application/vnd.ms-excel')
  );
}
