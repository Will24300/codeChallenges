function consecutive(array) {
  const high = Math.max(...array);
  const min = Math.min(...array);
  const myArr = [];
  for (var i = min; i <= high; i++) {
    myArr.push(i);
  }
  return myArr.length - array.length;
}
// consecutive([4, 8, 6]);
consecutive([-1, -5]);

// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0
