function findOutlier(integers) {
  let firstIn = [];
  let secondIn = [];
  for (const num of integers) {
    if (num % 2 === 0) {
      firstIn.push(num);
    } else {
      secondIn.push(num);
    }
  }
  if (firstIn.length > secondIn.length) {
    return secondIn[0];
  } else {
    return firstIn[0];
  }
}
// const result = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
const result = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
console.log(result);
