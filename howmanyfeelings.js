function countFeelings(string, array) {
  const myArr = [];
  const feelings = [];
  for (const word of array) {
    if (word.length < string.length) {
      for (let i = 0; i < word.length; i++) {
        if (string.includes(word[i])) {
          myArr.push(word[i]);
        }
      }
    }
  }
  for (const word of array) {
    if (myArr.join("").includes(word)) feelings.push(word);
  }

  const lgt = feelings.length;

  return lgt > 0 ? `${lgt} feelings.` : `${lgt} feeling.`;
}
// countFeelings("yliausoenvjw", ["anger", "awe", "joy", "love", "grief"]);
countFeelings("angerw", ["anger", "awe", "joy", "love", "grief"]);
//'awe', 'joy', 'love'
// anger , awe
