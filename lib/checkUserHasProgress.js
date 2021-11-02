// Working on the assumption that their is a progress object
// On the user model
export default (user, progressStep) =>
  user && user.progress && user.progress[progressStep];
