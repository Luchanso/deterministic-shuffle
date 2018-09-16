import shuffle from '../index';

describe('deterministic-shuffle', () => {
  const numbers = [1, 2, 3, 4, 5];
  const startDate = new Date(2017, 0, 1);

  it('should return shuffled array', () => {
    const actual = shuffle(numbers, startDate);
    const expected = shuffle(numbers, startDate);

    expect(actual.length).toBe(numbers.length);
    expect(actual).toEqual(expected);
  });

  it('should return deterministic shuffled array', () => {
    Date.now = jest.fn();

    Date.now.mockImplementationOnce(() => new Date(2017, 0, 1));
    const firstCicle = shuffle(numbers, startDate);

    Date.now.mockImplementationOnce(() => new Date(2017, 0, 2));
    const secondCicle = shuffle(numbers, startDate);

    expect(firstCicle).toEqual(secondCicle);
    Date.now.mockRestore();
  });

  it('should return deterministic shuffled array', () => {
    Date.now = jest.fn();

    Date.now.mockImplementationOnce(() => new Date(2017, 0, 1));
    const firstCicle = shuffle(numbers, startDate);

    Date.now.mockImplementationOnce(() => new Date(2017, 0, 6));
    const secondCicle = shuffle(numbers, startDate);

    expect(firstCicle).not.toEqual(secondCicle);
    Date.now.mockRestore();
  });
});
