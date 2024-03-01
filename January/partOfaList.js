const partlist = (arr) =>
  arr
    .map((_kata, index) => [
      arr.slice(0, index).join(" "),
      arr.slice(index).join(" "),
    ])
    .slice(1);

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
