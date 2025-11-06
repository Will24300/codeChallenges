function max(iterable) {
  return args.reduce((a, b) => (a > b ? a : b));
}

function min([...args]) {
  return args.reduce((a, b) => (a < b ? a : b));
}
