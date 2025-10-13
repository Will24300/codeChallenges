function indexEqualsValue(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === i) {
      return i;
    }
  }
  return -1;
}
// const result = indexEqualsValue([-8, 0, 2, 5]);
// const result = indexEqualsValue([-1, 0, 3, 6]);
const result = indexEqualsValue([0]);
// console.log(result);
