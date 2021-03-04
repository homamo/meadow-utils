import constructCloudinaryUrl from '../lib/constructCloudinaryUrl';

test(`Adds transformation string`, () => {
  expect(
    constructCloudinaryUrl(
      'https://res.cloudinary.com/homamo/image/upload/v1597793224/meadow-dev/rujs73unpr5mcgbqfprp.jpg',
      'w_150',
    ),
  ).toEqual(
    'https://res.cloudinary.com/homamo/image/upload/w_150/v1597793224/meadow-dev/rujs73unpr5mcgbqfprp.jpg',
  );
});

test(`Adds longer transformation string`, () => {
  expect(
    constructCloudinaryUrl(
      'https://res.cloudinary.com/homamo/image/upload/v1597793224/meadow-dev/rujs73unpr5mcgbqfprp.jpg',
      'w_150,q_auto:best',
    ),
  ).toEqual(
    'https://res.cloudinary.com/homamo/image/upload/w_150,q_auto:best/v1597793224/meadow-dev/rujs73unpr5mcgbqfprp.jpg',
  );
});
