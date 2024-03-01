// const points = (games) =>
//   games.reduce((acc, curval) => acc + +curval.split(":")[0], 0);
const points = (games) =>
  games.reduce((acc, curval) => {
    const [x, y] = curval.split(":");
    if (+x > +y) {
      curval = 3;
    } else if (+x < +y) {
      curval = 0;
    } else {
      curval = 1;
    }
    return acc + curval;
  }, 0);

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
