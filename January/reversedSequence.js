const reverseSeq = (n) =>
  Array(n)
    .fill(n)
    .map((val, index) => val - index);

console.log(reverseSeq(5));
