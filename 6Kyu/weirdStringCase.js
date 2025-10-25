function toWeirdCase(string) {
  let str = "";

  if (string.includes(" ")) {
    const strArr = string.split(" ");
    for (let word of strArr) {
      let myWord = word + "-";
      for (let i = 0; i < myWord.length; i++) {
        if (i % 2 !== 0 || i === "") {
          str += myWord[i].toLowerCase();
        } else {
          str += myWord[i].toUpperCase();
        }
      }
    }
    let result = str.replaceAll("-", " ");
    return result.slice(0, result.length - 1);
  } else {
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        str += string[i].toUpperCase();
      } else {
        str += string[i].toLowerCase();
      }
    }
    return str;
  }
}
console.log(toWeirdCase("This is a test")); // 'ThIs Is A TeSt'
// toWeirdCase("unique"); // 'UnIqUe

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"
