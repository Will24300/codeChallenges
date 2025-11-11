function findShort(s) {
  const strArr = s.split(" ");
  let lengths = [];
  for (const arr of strArr) {
    lengths.push(arr.length);
  }
  return Math.min(...lengths);
}

findShort("Let's travel abroad shall we");
findShort("turns out random test cases are easier than writing out basic ones");
