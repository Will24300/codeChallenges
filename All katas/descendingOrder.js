function descendingOrder(n) {
  const spltArr = String(n).split("");
  const newArr = [];
  for (const num of spltArr) {
    newArr.push(Number(num));
  }

  const result = newArr.sort((a, b) => b - a).join("");
  return Number(result);
}
console.log(descendingOrder(111)); //54421
// console.log(descendingOrder(1021));
