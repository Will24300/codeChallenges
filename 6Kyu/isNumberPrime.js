function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return i === num;
    }
  }
  return false;
}

// isPrime(13);
console.log(isPrime(73));

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
