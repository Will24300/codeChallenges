function solution(string) {
  let str = "";

  for (const char of string) {
    if (char === char.toUpperCase()) {
      str += " " + char;
    } else {
      str += char;
    }
  }

  return str;
}

const result = solution("camel");
