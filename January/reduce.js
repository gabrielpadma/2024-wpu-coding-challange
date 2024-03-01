function grow(x) {
  return x.reduce((curVal, acc) => curVal * acc);
}

console.log(grow([1, 2, 3]));
