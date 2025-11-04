function nthSmallest(...args) {
  const nums = [];
  const n = args.pop();
  for (const arrs of args) {
    for (const arr of arrs) {
      for (const num of arr) {
        nums.push(num);
      }
    }
  }
  return nums.sort((a, b) => a - b)[n - 1];
}

console.log(nthSmallest([[1, 5], [2], [4, 8, 9]], 4));
console.log(nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7));
console.log(nthSmallest([[2, 2, 2, 2, 2]], 3));

// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

// function nthSmallest(...args) {
//   const n = args.pop();
//   const nums = [];
//   for (const arr of args){
//     nums.push(...arr);
//   }

//   return nums.sort((a,b) => a -b)[n-1];
// }
