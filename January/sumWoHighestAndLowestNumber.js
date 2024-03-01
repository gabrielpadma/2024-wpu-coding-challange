function sumArray(array) {
  if (!array) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((acc, curVal) => acc + curVal, 0);
}

console.log(sumArray([-6, -20, -1, -10, -12]));
