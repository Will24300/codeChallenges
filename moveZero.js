function moveZeros(arr) {
  const newArr = [];
  const baseLength = arr.length;
  const myArr = arr.filter((item) => item !== 0);
  for (let i = 0; i < baseLength - myArr.length; i++) {
    newArr.push(0);
  }

  return [...myArr, ...newArr];
}
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
