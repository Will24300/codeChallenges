function XO(str) {
  const obj = {};
  for (const char of str) {
    obj[char.toLowerCase()] = (obj[char.toLowerCase()] || 0) + 1;
  }

  return obj.x === obj.o;
}
