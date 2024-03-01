const cantBeatSoJoin = (numbers) => {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < numbers.length - 1; i++) {
      const gangKiri = numbers[i].reduce((acc, val) => acc + val, 0);
      const gangKanan = numbers[i + 1].reduce((acc, val) => acc + val, 0);

      if (gangKanan > gangKiri) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return numbers.flat(); // Gabungkan array hasil

  return numbers
    .sort(
      (a, b) =>
        b.reduce((acc, val) => acc + val, 0) -
        a.reduce((acc, val) => acc + val, 0)
    )
    .flat();
};

console.log(
  cantBeatSoJoin([
    [5, 1],
    [9, 14],
    [17, 23],
    [4, 1],
    [0, 1],
  ])
);
