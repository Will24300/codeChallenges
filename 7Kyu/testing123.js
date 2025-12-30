var number = function (array) {
  const arr = [];
  for (let i = 1; i <= array.length; i++) {
    arr.push(`${i}: ${array[i - 1]}`);
  }
  return arr;
};
