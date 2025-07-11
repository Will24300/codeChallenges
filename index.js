function scoreboard(string) {
  // code here!
  let arrNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "nil",
  ];

  const words = string.split(" ");
  let scoreA;
  let scoreB;

  const arr = words.filter((word) => arrNumbers.includes(word));

  const convertToNumber = (str) => {
    if (str === "nil" || str === "zero") {
      return 0;
    } else if (str === "one") {
      return 1;
    } else if (str === "two") {
      return 2;
    } else if (str === "three") {
      return 3;
    } else if (str === "four") {
      return 4;
    } else if (str === "five") {
      return 5;
    } else if (str === "six") {
      return 6;
    } else if (str === "seven") {
      return 7;
    } else if (str === "eight") {
      return 8;
    } else if (str === "nine") {
      return 9;
    } else if (str === "ten") {
      return 10;
    }
  };

  scoreA = convertToNumber(arr[0]);
  scoreB = convertToNumber(arr[1]);

  return [scoreA, scoreB];
}

console.log(scoreboard("the score is four four"));
