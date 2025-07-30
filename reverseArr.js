function reversedArr(arr) {
  const revArr = arr.reverse();
  const finalArr = [];
  for (let i = 0; i < revArr.length; i++) {
    finalArr.push(revArr[i].split("").reverse().join(""));
  }
  return finalArr;
}

console.log(reversedArr(["hello", "world", "test"]));
