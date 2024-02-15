const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, curVal) => acc + curVal, 0);

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
