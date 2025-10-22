function inSphere(coords, radius) {
  let sum = 0;
  for (let num of coords) {
    sum += num ** 2;
  }
  return sum <= radius ** 2 ? true : false;
}
