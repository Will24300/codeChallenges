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

function digitalRoot(n) {
  let sum = n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);

  if (sum > 9) {
    return digitalRoot(sum);
  }

  return sum;
}

digitalRoot(195);

/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6 */
