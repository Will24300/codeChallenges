function swapDiagonals(matrix) {
  const reversed = [];
  if (matrix.length === 1) return matrix;
  if (matrix.length === 2) {
    for (const arr of matrix) {
      reversed.push(arr.reverse());
    }
  }
  if (matrix.length === 3) {
     reversed.push(matrix[0].reverse(), matrix[1], matrix[2].reverse());
  }

  return reversed;
}
console.log(
  swapDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// function swapDiagonals(matrix) {
//   const reversed = [];
//   for (const arr of matrix) {
//     reversed.push(arr.reverse());
//   }
//   return reversed;
// }
// swapDiagonals([
//   [1, 10],
//   [100, 1000],
// ]);
