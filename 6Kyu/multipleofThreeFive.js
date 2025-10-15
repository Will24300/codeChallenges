function solution(number) {
  if (number <= 3) return 0;
  const numbers = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    }
  }
  const sum = numbers.reduce((acc, elt) => acc + elt);
  return sum;
}
