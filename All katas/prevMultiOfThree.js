const prevMultOfThree = (n) => {
  if (n % 3 === 0) {
    return n;
  } else {
    const str = String(n).split("");
    str.pop();
    if (str.length === 0) {
      return null;
    }
    return prevMultOfThree(Number(str.join("")));
  }
};
const result = prevMultOfThree(25);
console.log(result);
