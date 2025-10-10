function mergeArrays(arr1, arr2) {
  let joinedArr = [];
  let filteredArr = [];
  if (arr1.length < 1 && arr2.length < 1) return [];
  for (let i = 0; i < arr1.length; i++) {
    joinedArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    joinedArr.push(arr2[i]);
  }

  for (let i = 0; i < joinedArr.length; i++) {
    if (joinedArr.includes(joinedArr[i])) {
      if (filteredArr.includes(joinedArr[i])) {
        continue;
      } else {
        filteredArr.push(joinedArr[i]);
      }
    }
  }

  return filteredArr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
