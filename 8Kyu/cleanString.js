function stringClean(s) {
  const myStr = s.replaceAll(" ", "-");
  let str = "";
  for (const char of myStr) {
    if (isNaN(char)) {
      str += char;
    }
  }
  return str.replaceAll("-", " ");
}
stringClean("(E3at m2e2!!)");
