function order(words) {
  if (words === "") return "";
  const numbers = [];
  const newArr = [];

  const spltWords = words.split(" ");
  for (const num of spltWords) {
    for (const n of num) {
      if (Number(n)) {
        numbers.push(Number(n));
      }
    }
  }

  const sorted = numbers.sort((a, b) => a - b);
  sorted.map((n) => {
    for (const num of spltWords) {
      if (num.includes(n)) {
        newArr.push(num);
      }
    }
  });

  return newArr.join(" ");
}
// order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");
