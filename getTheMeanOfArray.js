const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curVal) => acc + curVal, 0) / marks.length);
console.log(getAverage([2, 2, 2, 2]));
