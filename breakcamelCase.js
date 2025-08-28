function solution(string) {
  const upper = string.toUpperCase().split("");
  const filtered = upper.filter((item) => string.includes(item));
  const newArr = [...new Set(filtered)];
  let str = [];

  for (const letter of newArr) {
    if (string.includes(letter)) {
      str.push(string.replace(letter, ` ${letter}`));
    }
  }
  if (solution(str[0])) {
    return str;
  } else {
    return str;
  }
}

const result = solution("camelCasingTest");
console.log(result);
