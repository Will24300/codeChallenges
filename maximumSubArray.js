var maxSequence = function (arr) {
  const myArr = [];
  let tot = arr.reduce((acc, elt) => acc + elt);
  let lgt = arr.length;
  arr.splice(1, 1);
  arr.splice(arr.length - 1, 1);
  const result = arr.reduce((acc, elt) => acc + elt);
  myArr.push(result);

  if (arr.length > 2) {
    return maxSequence(arr);
  }

  console.log(arr);
};
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maxSequence([4, -1, 2]);
