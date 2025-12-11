function convertPalindromes(numbers) {
  const res = [];
  for (const num of numbers) {
    if (String(num) === String(num).split("").reverse().join("")) {
      res.push(1);
    } else {
      res.push(0);
    }
  }
  return res;
}
