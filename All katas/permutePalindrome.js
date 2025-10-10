function permuteAPalindrome(input) {
  console.log(input);

  console.log(input.split("").reverse().join(""));
}

permuteAPalindrome("junk");

// Moving zero to the end
// IP validation

function test(a = 10) {
  console.log(a);
}

test(); // 10 (no argument → default used)
test(undefined); // 10 (explicit undefined → default used)
test(null); // null (default NOT used, because null ≠ undefined)
