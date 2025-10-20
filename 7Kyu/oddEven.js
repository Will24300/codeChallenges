function oddOrEven(array) {
  if (array.length === 0) return "even"
   const sum = array.reduce((acc, elt) => acc + elt);
  if (sum % 2 === 0)return "even";
  else return "odd";
}