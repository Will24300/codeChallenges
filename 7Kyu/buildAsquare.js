function generateShape(integer) {
  let stars = "";
  let result = "";
  for (let i = 0; i < integer; i++) {
    stars += "+";
  }
  for (let i = 0; i < integer; i++) {
    result += `${stars}\n`;
  }
  return result.trim();
}
