import checkUserHasRole from './checkUserHasRole';

const validateOptions = (options) => {
  try {
    if (!options) throw new Error('options object is required.');
    if (!options.user) throw new Error('options.user is required.');
    if (!options.record) throw new Error('options.record is required.');
  } catch (exception) {
    throw new Error(
      `[checkUserHasRecordAccess.validateOptions] ${exception.message}`,
    );
  }
};

export default function (options) {
  try {
    if (!options.skipUserAuthCheck) {
      validateOptions(options);
      const { user, record } = options;
      if (!checkUserHasRole(user, 'ADMIN')) {
        if (!record.owner_id) {
          throw new Error(`No owner set for ${record._id}`);
        }
        if (record.owner_id.toString() !== user._id.toString()) {
          throw new Error(`You don't have permission to access this data`);
        }
      }
    }
  } catch (exception) {
    throw new Error(`[checkUserHasRecordAccess] ${exception.message}`);
  }
}
