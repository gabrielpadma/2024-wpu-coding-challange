function countBy(x, n) {
  return Array(n)
    .fill(x)
    .map((val, i) => {
      return x * (i + 1);
    });
}

console.log(countBy(2, 5));
