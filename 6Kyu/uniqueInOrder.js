var uniqueInOrder = function (iterable) {
  const myArr = typeof iterable === "object" ? iterable : iterable.split("");
  const result = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArr[i + 1]) {
      result.push(myArr[i]);
    }
  }
  return result;
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder([1, 2, 2, 3, 3]);
