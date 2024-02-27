function alphabet(ns) {
  const arr = ns.sort((a, b) => a - b);
  console.log(arr);
  // Delete AxB

  let ab = arr.find((e) => e === arr[0] * arr[1]);
  arr.splice(arr.indexOf(ab), 1);
  console.log("hapus AB " + arr);

  // A and B are first two numbers, CxD is the greatest. Delete A, B and CxD
  let newArr = arr.slice(2, 6);
  //now we have  C , D, BxC DxA. C is smallest

  console.log("Hapus A,B,C,CXD " + newArr);

  let c = newArr[0];
  //return to first array and find D from CxD (the biggest -the last one)
  return arr[6] / c;
}

console.log(alphabet([4, 51, 2, 51, 2, 1, 8, 204]));
