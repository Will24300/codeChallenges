function firstNonRepeatingLetter(s) {
  const str = s.toLowerCase();
  const unique = new Set();
  const myArr = [];
  const result = [];

  for (let char of str) {
    if (unique.has(char)) {
      myArr.push(char);
    }
    unique.add(char);
  }

  for (const ch of unique) {
    if (!myArr.includes(ch)) {
      result.push(ch);
    }
  }

  console.log(result[0]);
}
firstNonRepeatingLetter("StressE");
firstNonRepeatingLetter("moonmen");
