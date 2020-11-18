export default function (user, field) {
  if (!user || !user.profile || !field) return '';
  return user.profile[field];
}
