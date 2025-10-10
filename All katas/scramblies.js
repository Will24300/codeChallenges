function scramble(str1, str2) {
  const arrStr2 = str2.split("");
  const myArr = [];
  for (const letter of arrStr2) {
    if (!str1.includes(letter)) {
      myArr.push(letter);
    }
  }

  if (myArr.length === 0) return true;
  return false;
}
// console.log(scramble("katas", "steak"));
// console.log(scramble("rkqodlw", "world"));
console.log(scramble("javscripts", "javascript"));

// Friend or foe
