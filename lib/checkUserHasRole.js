export default function (user, role) {
  return user && user.roles && user.roles.includes(role);
}
