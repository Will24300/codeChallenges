function capitalsFirst(str) {
  const myArr = str.split(" ");
  const arr1 = [];
  const arr2 = [];
  const specials = "!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~";

  for (const letter of myArr) {
    if (
      Number(letter[0]) != letter[0] &&
      !specials.includes(letter.charAt(0))
    ) {
      if (letter[0] === letter[0].toUpperCase()) {
        arr1.push(letter);
      } else {
        arr2.push(letter);
      }
    }
  }

  return arr1.concat(arr2).join(" ");
}

console.log(capitalsFirst("Nbd rtepvd 108 Of4ec@ 4j5=dz 02lh =+uq i4 zys"));
