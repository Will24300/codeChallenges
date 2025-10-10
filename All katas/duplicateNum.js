const arr = [2, 34, 6, 7, 8, 2, 4, 6, 7, 34];

const newArr = arr.filter((num, index) => arr.indexOf(num) === index);
let arr2 = [1, 2, 2, 3, "hello", "hello", 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, "hello", 4]
