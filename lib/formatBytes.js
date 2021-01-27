import round from './round';

const maxBytes = 1024;
const maxKbBytes = maxBytes * 1024;
const maxMbBytes = maxKbBytes * 1024;
const maxGbBytes = maxMbBytes * 1024;

export default function (bytes) {
  if (!bytes) return undefined;
  if (bytes && bytes < 1000) return `${bytes} bytes`;
  if (bytes && bytes < maxKbBytes) return `${round(bytes / maxBytes, 2)} KB`;
  if (bytes && bytes < maxMbBytes) return `${round(bytes / maxKbBytes, 2)} MB`;
  if (bytes && bytes < maxGbBytes) return `${round(bytes / maxMbBytes, 2)} GB`;
  return `${round(bytes / maxGbBytes, 2)} TB`;
}
