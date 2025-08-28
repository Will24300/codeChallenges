function catchSignChange(arr) {
  let a = 0;
  let b = 0;
  for (const num of arr) {
    if (num >= 0) a += 1;
    else b += 1;
  }
  console.log("a: " + a + " and b: " + b);
  if (a === b) return 0;
  if (a > b) return b;
  else return a;
}
// const result = catchSignChange([]);
const result = catchSignChange([
  -67, -17, -83, -126, 84, -181, 33, 65, -161, 182, -99, 76, -115, 125, 51,
  -141, -117, -132, -40, 7, -60, 20, -102, 76, 75, 182, -82, -153, -58, -42, 80,
  5, -63, -140, 169, 177, -67, -199, -34, -36, -104, 83, 38, -191,
]);
// const result = catchSignChange([-47, 84, -30, -11, -5, 74, 77]);
console.log(result);
