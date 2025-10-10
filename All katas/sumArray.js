function arraySum(arr) {
  let sum = 0;
  for (const num of arr) {
    if (Array.isArray(num)) {
      sum += arraySum(num);
    } else if (typeof num === "number") {
      sum += num;
    }
  }
  return sum;
}

console.log(arraySum([1, 2, [1, 2]]));
