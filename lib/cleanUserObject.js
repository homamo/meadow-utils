export default function (user) {
  if (!user) return undefined;

  const safeUserObject = user.toObject ? user.toJSON() : user;
  Reflect.deleteProperty(safeUserObject, 'password');
  Reflect.deleteProperty(safeUserObject, 'salt');
  Reflect.deleteProperty(safeUserObject, 'resetToken');
  Reflect.deleteProperty(safeUserObject, '__v');

  return safeUserObject;
}
