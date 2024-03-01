// const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
//   mpg * fuelLeft >= distanceToPump;

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump - mpg * fuelLeft <= 0 ? true : false;
//sec possible way

console.log(zeroFuel(50, 25, 2));
