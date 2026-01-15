function spinWords(string) {
  const arr = string.split(" ");
  const res = [];
  for (const w of arr) {
    if (w.length >= 5) {
      const splited = w.split("").reverse().join("");
      res.push(splited);
    } else {
      res.push(w);
    }
  }
  return res.join(" ");
}
