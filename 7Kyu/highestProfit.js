function minMax(arr) {
  if (arr.length < 2) return [arr[0], arr[0]];
  const sortedArr = arr.sort((a, b) => a - b);
  return [sortedArr[0], sortedArr[arr.length - 1]];
}
