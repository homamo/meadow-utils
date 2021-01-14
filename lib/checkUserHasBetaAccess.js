export default function (user) {
  return (user && user.enableBetaFeatures) || false;
}
