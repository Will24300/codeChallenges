function nextBigger(n) {
  const str = String(n);
  const length = str.length;
  console.log(str[length - 1] === str[length - 2]);
}
// nextBigger(144);
nextBigger(2017);

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1
