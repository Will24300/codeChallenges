function reverseInvert(array) {
  const filter = array.filter((n) => Number.isInteger(n));
  const abs = filter.map((num) => -num);
  const res = [];
  for (const ch of abs) {
    if (String(ch).length > 2) {
      const str = String(ch).split("").reverse().join("");
      if (str.endsWith("-")) {
        const cut = str.slice(0, str.length - 1);
        res.push(-Number(cut));
      }
    }
    res.push(ch);
  }
  return res;
}

reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6]); // [-1,-21,-78,24,-5]
