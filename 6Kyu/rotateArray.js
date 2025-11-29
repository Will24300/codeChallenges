function rotate(array, n) {
  const copyArr = [...array];

  if (n === 0 || copyArr.length === 0) return copyArr;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      const poped = copyArr.pop();
      copyArr.unshift(poped);
    }
    return copyArr;
  }
  if (n < 0) {
    for (let i = 1; i <= Math.abs(n); i++) {
      const shifted = copyArr.shift();
      copyArr.push(shifted);
    }
    return copyArr;
  }
}
