export const badRandom = (seed = 0) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default {
  badRandom
};
