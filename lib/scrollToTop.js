export default function () {
  if (
    window &&
    typeof window === 'object' &&
    window.scrollTo &&
    typeof window.scrollTo === 'function'
  ) {
    window.scrollTo(0, 0);
  }
}
