function explode(x) {
  let num = [];
  const arr = [];
  for (const n of x) {
    if (!isNaN(n)) {
      num.push(n);
    }
  }
  if (num.length === 0) return "Void!";
  const sum = num.reduce((a, b) => a + b, 0);

  for (let i = 0; i < sum; i++) {
    arr.push(x);
  }
  return arr;
}

explode(["a", 0]);
