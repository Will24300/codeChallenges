function permuteAPalindrome(input) {
  //   const splStr = input.split("").reverse().join("");
  //   console.log(splStr);

  return input.split("").reverse().join("") == input;
}

// const result = permuteAPalindrome("baabcd");
const result = permuteAPalindrome("racecars");
console.log(result);
