function duplicateCount(text) {
  const lowerStr = text.toLowerCase().split("").sort();
  const newArr = [];

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerStr[i + 1] && !newArr.includes(lowerStr[i])) {
      newArr.push(lowerStr[i]);
    }
  }
  console.log(newArr);

  //   return newArr.length;
}

const result = duplicateCount("Indivisibilities");
console.log(result);
