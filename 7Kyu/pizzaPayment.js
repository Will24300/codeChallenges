function michaelPays(costs) {
  let michael = 0;
  let pete = 0;
  if (costs < 5) {
    return costs;
  } else {
    michael += (costs * 2) / 3;
    pete += (costs * 1) / 3;
  }
  if (pete > 10) {
    return michael + pete - 10;
  } else {
    return michael;
  }
}
const result = michaelPays(80);
console.log(result);
