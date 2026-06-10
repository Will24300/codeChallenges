function solve(s) {
  const reversed = s.split("").reverse().join("");
  if (s === reversed) return "OK";

  let pal = s.slice();

  console.log(pal);
}
const result = solve("abbaa");
// console.log(result);
