export default function (user, type) {
  if (!user || !type) return false;

  return (user.notifications && user.notifications[type]) || false;
}
