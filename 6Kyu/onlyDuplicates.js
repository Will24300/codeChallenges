function onlyDuplicates(str) {
  const strArr = str.split("");
  const arr = [];
  const chars = [];
  let result = "";
  for (const char of strArr) {
    if (!arr.includes(char)) {
      arr.push(char);
    } else {
      chars.push(char);
    }
  }
  const removeChar = [...new Set(chars)];
  for (const w of str) {
    result += removeChar.filter((item) => w === item);
  }
  return result;
}
onlyDuplicates("abccdefee"); // "cceee"
onlyDuplicates("hello");
onlyDuplicates("colloquial");
