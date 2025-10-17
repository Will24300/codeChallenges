function explode(s) {
  const strArr = s.split("");
  let result = "";
  for (const char of strArr) {
    result += char.repeat(Number(char));
  }
  return result;
}
explode("312");
