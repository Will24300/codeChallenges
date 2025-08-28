function divisors(integer) {
  const newArr = [];
  for (let i = 2; i <= integer; i++) {
    if (integer % i === 0) newArr.push(i);
  }
  if (newArr.length === 1) return `${newArr[0]} is prime`;
  if (newArr.length > 1) return newArr.slice(0, newArr.length - 1);
}
// const result = divisors(12);
const result = divisors(15);
console.log(result);
