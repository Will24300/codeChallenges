function stringTransformation(string, transformations) {
  console.log(string, transformations);
  if (transformations.length === 0) return string;
  let str = "";
  const first = transformations[0];
  const second = transformations[1];
  const toUpper = (word) => {
    let myStr = "";
    for (const char of word) {
      myStr += char.toUpperCase();
    }
    str += myStr;
  };
  const toLower = (word) => {
    let myStr = "";
    for (const char of word) {
      myStr += char.toLowerCase();
    }
    str = myStr;
  };
  const reverse = (word) => {
    const myStr = word.split("").reverse().join("");
    str = myStr;
  };
  const duplicate = (word) => {
    let myStr = word;
    const arr = [];
    for (let i = 0; i < word.length; i++) {
      arr.push(string[i]);
      arr.push(myStr[i]);
    }
    const newStr = arr.sort().join("");
    str = newStr;
  };
  switch (first) {
    case "U":
      toUpper(string);
      break;
    case "L":
      toLower(string);
      break;
    case "R":
      reverse(string);
      break;
    case "D":
      duplicate(string);
      break;
  }
  if (str !== "") {
    switch (second) {
      case "U":
        toUpper(str);
        break;
      case "L":
        toLower(str);
        break;
      case "R":
        reverse(str);
        break;
      case "D":
        duplicate(str);
        break;
    }
    default: break;
  }

  return str;
}
