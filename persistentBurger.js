// function persistence(num, count = 0) {
//   let sum = 1;

//   if (num > 9) {
//     const arrNum = String(num).split("");
//     for (const n of arrNum) {
//       sum *= Number(n);
//     }
//     count++;
//     if (sum > 9) {
//       return persistence(sum, count);
//     }
//   }

//   return count;
// }
// persistence(4);

// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((s, d) => s * d);
//   }
//   return i;
// }

// console.log(persistence(999));

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = String(num)
      .split("")
      .reduce((acc, elt) => acc * elt);
  }

  return i;
}

console.log(persistence(39));
