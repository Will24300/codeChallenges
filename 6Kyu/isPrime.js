function isPrime(str) {
  const numbers = [];
  let temp = "";
  if (str.toLowerCase().includes("prime")) return true;

  for (const ch of str) {
    if (!isNaN(ch)) {
      temp += ch;
    } else if (temp) {
      numbers.push(Number(temp));
      temp = "";
    }
  }
  if (temp) numbers.push(Number(temp));
  const isPrime = numbers.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  if (isPrime.length > 0) return true;
  return false;
}
const result = isPrime("starPrime");
console.log(result);
