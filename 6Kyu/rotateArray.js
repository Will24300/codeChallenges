function rotate(data, n) {
  if (n === 0 || data.length === 0) return data;
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      const poped = data.pop();
      data.unshift(poped);
    }
    return data;
  } else {
    for (let i = 0; i < Math.abs(n); i++) {
      const shifted = data.shift();
      data.push(shifted);
    }
    return data;
  }
}
