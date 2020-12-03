export default function (path) {
  const params = new URLSearchParams(window.location.search);
  return `${path}?${params}`;
}
