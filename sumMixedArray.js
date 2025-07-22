function sumMix(x) {
  let numArr = [];

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      numArr.push(Number(x[i]));
    } else if (typeof x[i] === "number") {
      numArr.push(Number(x[i]));
    }
  }

  const result = numArr.reduce((acc, elt) => acc + elt);

  return result;
}
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
