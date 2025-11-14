function doubleChar(str) {
  let myStr = "";
  for (const char of str) {
    myStr += char.repeat(2);
  }
  return myStr;
}

console.log(doubleChar("abcd"));
