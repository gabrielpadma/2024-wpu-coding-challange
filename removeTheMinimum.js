const removeSmallest = (numbers) => {
  const min = Math.min(...numbers);
  return numbers.slice().splice(numbers.indexOf(min), 1);
};

console.log(removeSmallest([1, 2, 3, 4, 5]));
