function correct(string) {
  // your code here
  let num = [5, 0, 1];
  let newArr = string.split("");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == 5) {
      console.log(newArr[i]);
    }
  }
  // console.log(newArr);
}
console.log(correct("PAR15"));
