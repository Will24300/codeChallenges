function hasPair(A, sum) {
  const seen = new Set();

  for (const num of A) {
    const needed = sum - num;
    if (seen.has(needed)) return true;
    seen.add(num);
  }
  return false;
}

// function hasPair(A, sum) {
//   for (let i = 0; i < A.length; i++) {
//     for (let y = i; y < A.length; y++) {
//       if (A[y] + A[i] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// hasPair([1, 1, 7, 1], 10);
// console.log(hasPair([-5, -2, 1], -1));
console.log(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 3));
