function generatePairs(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    for (let y = i; y <= n; y++) {
      result.push([i, y]);
    }
  }
  console.log(result);

  return result;
}
generatePairs(0);
