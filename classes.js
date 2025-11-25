function minimumBillCount(value, availables) {
  const numbers = [];
  for (const num of availables) {
    numbers.push(value / num);
  }

  return numbers.sort((a, b) => a - b)[0];
}
console.log(minimumBillCount(10000000, [1, 10, 20, 50, 100]));

console.log(minimumBillCount(40, [1, 10, 20]));
