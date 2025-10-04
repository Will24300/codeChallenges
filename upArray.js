function upArray(arr) {
  if (arr.length === 0) return null;
  for (const num of arr) {
    if (num > 9 || num < 0) return null;
  }
  const myArr = [];
  const result = [];
  if (arr[0] === 0) {
    let copyArr = [...arr];
    copyArr.shift();
    myArr.push(Number(copyArr.join("")) + 1);
    const newArr = String(myArr).split("");
    newArr.unshift(0);
    for (const num of newArr) {
      result.push(Number(num));
    }
    return result;
  } else {
    if (arr[arr.length - 1] < 9) {
      console.log(arr);
    } else {
      console.log("no");
    }
  }
}
// console.log(upArray([0, 2, 3, 9]));
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1])
);
//  [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
