const removeSmallest = (numbers) =>
  numbers
    .slice(0, numbers.indexOf(Math.min(...numbers)))
    .concat(numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1));
