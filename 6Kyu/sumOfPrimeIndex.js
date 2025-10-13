function total(arr) {
  if (arr.length === 0) return 0;
  const arrIndexes = [];
  const primes = [];
  for (let i = 0; i < arr.length; i++) {
    arrIndexes.push(i);
  }
  const isPrimes = arrIndexes.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  for (const num of isPrimes) {
    primes.push(arr[num]);
  }
  const sum = primes.reduce((acc, elt) => acc + elt);
  return sum;
}
// total([1, 2, 3, 4, 5, 6, 7, 8]);
// total([1, 2, 3, 4, 5]);
const result = total([]);
console.log(result);

//21
