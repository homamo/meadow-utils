import round from './round';

const maxBytes = 1000;
const maxKbBytes = maxBytes * 1000;
const maxMbBytes = maxKbBytes * 1000;
const maxGbBytes = maxMbBytes * 1000;
const maxTbBytes = maxGbBytes * 1000;

export default function (bytes) {
  if (bytes && bytes < 1000) return `${bytes} bytes`;
  if (bytes && bytes < maxKbBytes) return `${round(bytes / maxBytes, 2)} KB`;
  if (bytes && bytes < maxMbBytes) return `${round(bytes / maxKbBytes, 2)} MB`;
  if (bytes && bytes < maxGbBytes) return `${round(bytes / maxMbBytes, 2)} GB`;
  if (bytes && bytes >= maxTbBytes) return `${round(bytes / maxGbBytes, 2)} TB`;
  return undefined;
}
