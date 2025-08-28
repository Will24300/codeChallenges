function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      }
    }
  }
  return sum;
}
// arraySum([1, 2, 3]);
// const result = arraySum([1, 2, [1, 2]]);
const result = arraySum([1, 2, [1, 2, 3, [5, 1, 0]]]);
console.log(result);
