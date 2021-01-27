import formatBytes from '../lib/formatBytes';

test(`Formats bytes`, () => {
  expect(formatBytes(100)).toEqual('100 bytes');
});

test(`Formats KB`, () => {
  expect(formatBytes(1024)).toEqual('1 KB');
});

test(`Formats MB`, () => {
  expect(formatBytes(1024 * 1024)).toEqual('1 MB');
});

test(`Formats GB`, () => {
  expect(formatBytes(1024 * 1024 * 1024)).toEqual('1 GB');
});

test(`Formats TB`, () => {
  expect(formatBytes(1024 * 1024 * 1024 * 1024)).toEqual('1 TB');
});
