function nextBigger(n) {
  const str = String(n);
  const length = str.length;
  console.log(str[length - 1] === str[length - 2]);
}
// nextBigger(144);
nextBigger(2017);
