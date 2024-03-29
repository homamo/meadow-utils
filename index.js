import capitalize from './lib/capitalize';
import checkFileIsCsv from './lib/checkFileIsCsv';
import checkIsSameId from './lib/checkIsSameId';

import checkUserHasAnyRole from './lib/checkUserHasAnyRole';
import checkUserHasBetaAccess from './lib/checkUserHasBetaAccess';
import checkUserHasOneOfRoles from './lib/checkUserHasOneOfRoles';
import checkUserHasRecordAccess from './lib/checkUserHasRecordAccess';
import checkUserHasRole from './lib/checkUserHasRole';
import checkUserHasProgress from './lib/checkUserHasProgress';
import checkUserNotificationsEnabled from './lib/checkUserNotificationsEnabled';

import checkValidEmail from './lib/checkValidEmail';
import checkValueIsTrue from './lib/checkValueIsTrue';

import cleanUserObject from './lib/cleanUserObject';

import constructCloudinaryUrl from './lib/constructCloudinaryUrl';

import convertDecimalToPercent from './lib/convertDecimalToPercent';
import convertPercentToDecimal from './lib/convertPercentToDecimal';
import convertToPence from './lib/convertToPence';
import convertToPounds from './lib/convertToPounds';

import formatAddress from './lib/formatAddress';
import formatBytes from './lib/formatBytes';
import formatCurrency from './lib/formatCurrency';
import formatDateTime from './lib/formatDateTime';
import formatKebabText from './lib/formatKebabText';
import formatNumberFromPx from './lib/formatNumberFromPx';
import formatOrdinalNumber from './lib/formatOrdinalNumber';
import formatPercentage from './lib/formatPercentage';
import formatSnakeAsText from './lib/formatSnakeAsText';
import formatUserName from './lib/formatUserName';

import getDateFromMonthAndYear from './lib/getDateFromMonthAndYear';
import getMonthList from './lib/getMonthList';
import getMonthSelectOptions from './lib/getMonthSelectOptions';
import getRandomArrayValue from './lib/getRandomArrayValue';
import getRandomInt from './lib/getRandomInt';
import getRandomString from './lib/getRandomString';
import getYearList from './lib/getYearList';
import getYearSelectOptions from './lib/getYearSelectOptions';

import isDevEnv from './lib/isDevEnv';
import isProdEnv from './lib/isProdEnv';

import keepParams from './lib/keepParams';
import pluralize from './lib/pluralize';
import round from './lib/round';
import safeUserProfileField from './lib/safeUserProfileField';
import saveFile from './lib/saveFile';
import scrollToTop from './lib/scrollToTop';

export {
  capitalize,
  checkUserHasAnyRole,
  checkUserHasBetaAccess,
  checkUserHasOneOfRoles,
  checkUserHasRecordAccess,
  checkUserHasRole,
  checkUserNotificationsEnabled,
  checkUserHasProgress,
  cleanUserObject,
  checkValidEmail,
  checkIsSameId,
  checkFileIsCsv,
  checkValueIsTrue,
  constructCloudinaryUrl,
  convertDecimalToPercent,
  convertPercentToDecimal,
  convertToPence,
  convertToPounds,
  formatAddress,
  formatBytes,
  formatCurrency,
  formatDateTime,
  formatKebabText,
  formatNumberFromPx,
  formatOrdinalNumber,
  formatPercentage,
  formatSnakeAsText,
  formatUserName,
  getDateFromMonthAndYear,
  getMonthList,
  getMonthSelectOptions,
  getRandomArrayValue,
  getRandomInt,
  getRandomString,
  getYearList,
  getYearSelectOptions,
  isDevEnv,
  isProdEnv,
  keepParams,
  pluralize,
  round,
  safeUserProfileField,
  saveFile,
  scrollToTop,
};
