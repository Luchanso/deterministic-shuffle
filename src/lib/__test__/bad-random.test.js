import { badRandom } from '../bad-random';

describe('bad-random', () => {
  it('should return deterministic random values', () => {
    const seed = 1;
    const actual = badRandom(seed);
    const expected = badRandom(seed);

    expect(actual).toEqual(expected);
  });

  it('values should be between [0, 1)', () => {
    for (let seed = 0; seed < 10000; seed++) {
      const number = badRandom(seed);

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(1);
    }
  });

  it('should work without arguments', () => {
    const result = typeof badRandom();

    expect(result).toEqual('number');
  });
});
