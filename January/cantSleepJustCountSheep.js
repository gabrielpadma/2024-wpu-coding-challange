const countSheep = (num) => {
  return [...Array(num)].map((val, index) => `${++index} sheep...`).join("");
};

console.log(countSheep(3));
