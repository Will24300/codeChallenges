function changeCase(identifier, targetCase) {
  if (identifier.length === 0) return identifier;
  const cases = ["snake", "camel", "kebab"];
  for (const word of cases) {
    if (targetCase === word) {
      return true;
    } else return false;
  }
  switch (targetCase) {
    case "snake": {
      let str = "";
      for (const char of identifier) {
        if (char === char.toUpperCase()) {
          str += "_" + char.toLowerCase();
        } else {
          str += char;
        }
      }
      return str;
    }
    case "camel": {
      const str = identifier.replaceAll("-", " ").split(" ");
      const myArr = [];
      const shifted = str.shift();
      for (const letter of str) {
        myArr.push(letter.slice(0, 1).toUpperCase() + letter.slice(1));
      }
      myArr.unshift(shifted);
      return myArr.join("");
    }
    case "kebab": {
      return identifier.replaceAll("_", "-");
    }
  }
  return identifier;
}
const result = changeCase("snakeCase", "camel");
// const result = changeCase("some-lisp-name", "camel");
// const result = changeCase("map_to_all", "kebab");
console.log(result);

// doTest("snakeCase", "snake", "snake_case");
// doTest("some-lisp-name", "camel", "someLispName");
// doTest("map_to_all", "kebab", "map-to-all");
