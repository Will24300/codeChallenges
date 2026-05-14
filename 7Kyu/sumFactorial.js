function sumFactorial(arr) {
  let result = 0;

  function factorial(n) {
    let sum = 1;
    for (let i = n; i > 0; i--) {
      sum *= i;
    }
    result += sum;
  }

  for (num of arr) {
    factorial(num);
  }

  return result;
}
sumFactorial([4, 6]);
