// var min = function (list) {
//   if (list.length == 1) return ([result] = list);

//   let tempMax = list[0];
//   list.forEach((num, index) => {
//     if (num < tempMax) tempMax = num;
//   });
//   return tempMax;
// };

// var max = function (list) {
//   if (list.length == 1) return ([result] = list);

//   let tempMax = list[0];
//   list.forEach((num, index) => {
//     if (num > tempMax) tempMax = num;
//   });
//   return tempMax;
// };

const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => a - b)[list.length - 1];

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
