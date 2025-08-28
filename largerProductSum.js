function sumOrProduct(array, n) {
  const sortArr = array.sort((a, b) => a - b);
  let sum = 0;
  let product = 1;

  const sumArr = sortArr.slice(-n);
  const productArr = sortArr.slice(0, n);

  for (const num of sumArr) {
    sum += num;
  }
  for (const num of productArr) {
    product *= num;
  }
  if (sum > product) return "sum";
  if (sum < product) return "product";
  if (sum === product) return "same";
}

sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
