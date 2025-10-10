function esrever(str) {
  if (!str) return "Empty string!";
  let pMark = "";
  const pMarks = [".", "!", "?"];
  for (const mark of pMarks) {
    if (str.endsWith(mark)) pMark += mark;
  }
  return str.split("").reverse().splice(1).join("") + pMark;
}

console.log(esrever("b3tTer p4ss thIS 0ne.")); // en0 SIht ss4p reTt3b.
