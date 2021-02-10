import capitalize from './capitalize';

export default function (user, { first, noProperize } = {}) {
  if (!user) {
    return null;
  }

  const { profile } = user;

  if (!profile || (!profile.firstName && !profile.lastName)) {
    return 'No name set';
  }

  const fName = noProperize ? profile.firstName : capitalize(profile.firstName);
  const lName = noProperize ? profile.lastName : capitalize(profile.lastName);

  if (fName && (first || !lName)) return fName;
  if (lName && !fName) return lName;

  return `${fName} ${lName}`;
}
