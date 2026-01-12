function sum(x) {
  let total = x;
  if (x === undefined) return 0;

  return function next(y) {
    if (y === undefined) {
      return total;
    }
    total += y;
    return next;
  };
}
