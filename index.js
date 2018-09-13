import { badRandom } from './lib/bad-random';

const DAY = 3600 * 24 * 1000;

const shuffle = (array, startDate) => {
  const startDay = startDate.getTime() / DAY;
  const currentDay = Date.now() / DAY;
  let seed = Math.floor((currentDay - startDate) / array.length);

  const result = [...array];
  for (let i = array.length - 1; i > 0; i--, seed++) {
    const n = Math.round(badRandom(seed) * i);
    const temp = result[i];
    result[i] = result[n];
    result[n] = temp;
  }

  return result;
};

export default shuffle;
