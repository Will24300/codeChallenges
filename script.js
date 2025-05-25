function compareTriplets(a, b) {
  let countA = 0;
  let countB = 0;
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      countA++;
    } else if (a[i] < b[i]) {
      countB++;
    } else {
      continue;
    }
  }
  newArr.push(countA, countB);

  return newArr;
}
compareTriplets([5, 6, 7], [3, 6, 10]);

/* Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to calculate their comparison points by comparing each category:

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Example

a = [1, 2, 3]
b = [3, 2, 1]

For elements *0*, Bob is awarded a point because a[0] < b[0].
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second. */

function diagonalDifference(arr) {
  arr[0].splice(1, 1);
  let spliced = arr[1].splice(1, 1);
  arr[2].splice(1, 1);

  let sum1 = 0;
  let sum2 = 0;
  let diff = 0;

  sum1 += arr[0][0] + parseInt(spliced) + arr[2][1];
  sum2 += arr[0][1] + parseInt(spliced) + arr[2][0];
  for (let i = 0; i < 2; i++) {}

  if (sum1 > sum2) {
    diff += sum1 - sum2;
  } else if (sum1 < sum2) {
    diff += sum2 - sum1;
  } else {
    diff += 0;
  }

  return diff;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);

// function diagonalDifference(matrix) {
//     const n = matrix.length;
//     let leftToRightSum = 0;
//     let rightToLeftSum = 0;

//     for (let i = 0; i < n; i++) {
//         // Left-to-right diagonal (i,i)
//         leftToRightSum += matrix[i][i];
//         // Right-to-left diagonal (i,n-1-i)
//         rightToLeftSum += matrix[i][n-1-i];
//     }

//     return Math.abs(leftToRightSum - rightToLeftSum);
// }

// // Example usage:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]
// ];
// console.log(diagonalDifference(matrix)); // Output: 2
