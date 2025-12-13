function repeats(arr) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      myArr.push(arr[i]);
    }
  }
  return myArr.reduce((a,b) => a + b, 0);
}
