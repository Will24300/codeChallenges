function isPrime(str) {
  if (Number(str)) {
    for (let i = 2; i < Number(str); i++) {
      if (Number(str) % i !== 0) {
        return "A prime is present";
      } else {
        return "No prime has been found";
      }
    }
  }
  if (str.toLowerCase().includes("prime")) {
    return "A prime is present";
  } else {
    // return str.includes(Nu);
    console.log(Number(str));
  }
}

isPrime("11aagghh4");
// console.log(isPrime("11"));
// isPrime("optimusprime");

// isPrime('optimusprime'),true,'A prime is present';
// isPrime('11'),true,'A prime is present';
// isPrime('4'),false,'No prime has been found';
// isPrime('starPrime'),true,'A prime is present';
// isPrime('11aagghh4'),true,'A prime is present';
