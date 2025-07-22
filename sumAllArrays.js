// function arraySum(arr) {
//   let numArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length) {
//       for (let y = 0; y < arr[i].length; y++) {
//         numArr.push(arr[i][y]);
//       }
//     } else {
//       numArr.push(arr[i]);
//     }
//   }

//   return numArr.reduce((acc, elt) => acc + elt);
// }
// console.log(arraySum(["3pig3"]));

function arraySum(arr) {
  let numArr = [];
  const filtered = arr.filter((elt) => typeof Number(elt) === "number");
  console.log(filtered);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      for (let y = 0; y < arr[i].length; y++) {
        numArr.push(arr[i][y]);
      }
    } else {
      numArr.push(arr[i]);
    }
  }

  return numArr.reduce((acc, elt) => acc + elt);
}
console.log(arraySum(["3pig3"]));

// if (typeof arr[i] === "string") {
//       for (const letter of arr[i]) {
//         if (Number(letter)) numArr.push(Number(letter));
//       }
//     }
