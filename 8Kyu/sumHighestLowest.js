function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) return 0;
  const sortedArr = array.sort((a,b) => a -b);
  const shifted = sortedArr.shift();
  const poped = sortedArr.pop();
  return sortedArr.reduce((a, b) => a + b);
}
