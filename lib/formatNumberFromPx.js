export default function (s) {
  return (s && parseInt(s.split('px')[0], 10)) || undefined;
}
