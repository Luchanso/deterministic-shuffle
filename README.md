# deterministic-shuffle

Simple deterministic shuffle - for simple things

installation:

```
yarn add @lucanso/deterministic-shuffle
```

usage:
function shuffle return always deterministic array by day range

```
import shuffle from '@luchanso/determinisitc-random';

const array = [1, 2, 3, 4, 5];
const startDate = new Date(2017, 0, 1);

console.log(shuffle(array, startDate));
```

Maybe in future:

- [ ] select custom range
