function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i + 1] < 1) {
      console.log(arr[i]);
    }
  }
}
// console.log(firstNonConsecutive([1, 2, 3, 4]));
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
