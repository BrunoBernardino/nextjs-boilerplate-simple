import { generateRandomPositiveInt } from '../utils';

describe('lib/utils', () => {
  it('generateRandomPositiveInt', () => {
    const notVeryRandomPositiveInt = generateRandomPositiveInt(0);
    expect(notVeryRandomPositiveInt).toEqual(0);

    const randomPositiveInt = generateRandomPositiveInt(10);
    expect(randomPositiveInt).toBeGreaterThan(-1);
    expect(randomPositiveInt).toBeLessThan(11);

    const anotherRandomPositiveInt = generateRandomPositiveInt();
    expect(anotherRandomPositiveInt).toBeGreaterThan(-1);
    expect(anotherRandomPositiveInt).toBeLessThan(10001);
  });
});
