export default function (url, transformation) {
  const splitUrl = url.split('/upload');
  return `${splitUrl[0]}/upload/${transformation}${splitUrl[1]}`;
}
