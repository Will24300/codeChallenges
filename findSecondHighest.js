function processData(myArray) {
  let max = Math.max(...myArray);

  let newArr = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < max) {
      newArr.push(myArray[i]);
    }
  }
  let secondHigh = Math.max(...newArr);

  return secondHigh;
}

console.log(processData([1, 2, 3, 6, 8, 4, 5, 6]));
