function reverseWords(str) {
  const revStr = str.split(" ");
  const myArr = [];
  //   console.log(revStr)
  for (const elt of revStr) {
    myArr.push(elt.split("").reverse().join(""));
  }

  return String(myArr).replaceAll(",", " ");
}
const result = reverseWords("This is an example!");
console.log(result);
