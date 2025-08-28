function arrayDiff(a, b) {
  const newArr = a.filter((num) => !b.includes(num));
  console.log(newArr);
}
arrayDiff([1, 2, 2, 3], [2, -4]);
