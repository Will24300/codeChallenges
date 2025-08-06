function sakuraFall(v) {
  if (v <= 0) return 0;
  const sec = 80;
  const cent = 5;
  const result = cent / v;

  return result * sec;
}
// sakuraFall(-1);
console.log(sakuraFall(-1));
