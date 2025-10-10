function lastDigit(n, m) {
  const result = [];
  result.push(Math.pow(Number(n), Number(m)));
  let lastN;
  for (const num of result) {
    const str = String(num).split("");
    lastN = str[str.length - 1];
  }

  return BigInt(lastN);
}
lastDigit(9n, 7n);
