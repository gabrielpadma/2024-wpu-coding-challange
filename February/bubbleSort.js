const bubble = (arr) => {
  const snapshot = [];
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        snapshot.push([...arr]);

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return snapshot;
};

console.log(bubble([2, 1, 4, 3]));
