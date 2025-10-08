function calculate(string) {
  const strArr = string.split(" ");
  const numbers = [];
  let sign = "";

  for (const letter of strArr) {
    if (Number(letter)) {
      numbers.push(Number(letter));
    }
    if (letter === "gains" || letter === "loses") {
      sign += letter;
    }
  }
  switch (sign) {
    case "gains":
      return numbers.reduce((acc, item) => acc + item);
    case "loses":
      return numbers.reduce((acc, item) => acc - item);
    default:
      return string;
  }
}
// "Jerry has 34 apples and gains 6"  -->  40
const result = calculate("Jerry has 34 apples and loses 6");
console.log(result);
