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

function highAndLow(numbers) {
  let numArr = numbers.split(" ");
  let highest = parseInt(numArr[0]);
  let smallest = parseInt(numArr[0]);

  numArr.map((number) => {
    if (parseInt(number) > highest) {
      highest = parseInt(number);
    }
    if (parseInt(number) < smallest) {
      smallest = parseInt(number);
    }
  });

  return highest + " " + smallest;
}

highAndLow("1 2 -3 4 5");

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

function XO(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      countO++;
    }
    if (str[i].toLowerCase() === "x") {
      countX++;
    }
  }

  return countX === countO;
}

XO("ooxx");

/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function nbYear(p0, percent, aug, p) {
  let newPercent = percent / 100;
  let countYear = 0;

  const coverter = (n) => {
    p0 = Math.trunc(n + n * newPercent + aug);

    return p0;
  };

  while (p0 < p) {
    coverter(p0);
    countYear++;
  }
  return countYear;
}

nbYear(1000, 2, 50, 1200);

/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons. */
