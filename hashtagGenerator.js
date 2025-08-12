function generateHashtag(str) {
  const arrStr = str.split(" ");
  const newArr = [];
  let newStr = "";
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] !== "") newArr.push(arrStr[i]);
  }

  for (const item of newArr) {
    newStr += item[0].toUpperCase() + item.slice(1);
  }
  if (`#${newStr}`.length > 140) return false;
  if (newStr === "") return false;

  return `#${newStr}`;
}

generateHashtag("    Hello     World   ");
console.log(generateHashtag("    Hello     World   "));
// generateHashtag("Codewars is nice");
// console.log(generateHashtag("Codewars is nice"));
// console.log(
//   generateHashtag(
//     "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
//   )
// );
