export default function (user, options = {}) {
  if (!user) {
    return null;
  }

  const { profile } = user;

  if (!profile || (!profile.firstName && !profile.lastName)) {
    return 'No name set';
  }

  if (profile.firstName && (options.first || !profile.lastName))
    return profile.firstName;
  if (profile.lastName && !profile.firstName) return profile.lastName;

  return `${profile.firstName} ${profile.lastName}`;
}
