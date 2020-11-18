export default function ({ headers, file, name }) {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement('a');
  link.href = url;
  const filename =
    name ||
    (headers &&
      headers['content-disposition'] &&
      headers['content-disposition'].split('filename=')[1]) ||
    'data.txt';
  link.setAttribute('download', filename);
  link.click();
  window.URL.revokeObjectURL(url);
}
