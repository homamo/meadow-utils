export default function (user, roles) {
  return user && user.roles && roles.some((r) => user.roles.includes(r));
}
